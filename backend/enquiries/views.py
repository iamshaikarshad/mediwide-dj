from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Enquiry
from .serializers import EnquirySerializer


@api_view(['POST'])
def create_enquiry(request):
    """
    Create a new enquiry, send admin notification, and auto-response
    """
    serializer = EnquirySerializer(data=request.data)
    
    if serializer.is_valid():
        enquiry = serializer.save()
        
        # Send admin notification
        try:
            admin_subject = f"New Enquiry from {enquiry.name}"
            admin_message = f"""
New enquiry received:

Name: {enquiry.name}
Email: {enquiry.email}
Phone: {enquiry.phone or 'Not provided'}
Subject: {enquiry.subject}

Message:
{enquiry.message}

---
Received at: {enquiry.created_at.strftime('%Y-%m-%d %H:%M:%S')}
            """
            
            send_mail(
                admin_subject,
                admin_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.ADMIN_EMAIL],
                fail_silently=False,
            )
            enquiry.admin_notified = True
        except Exception as e:
            print(f"Failed to send admin notification: {e}")
        
        # Send auto-response to customer
        try:
            customer_subject = "Thank you for contacting MediWide"
            customer_message = f"""
Dear {enquiry.name},

Thank you for reaching out to MediWide. We have received your enquiry regarding "{enquiry.subject}".

Our team will review your message and get back to you within 24-48 hours. We appreciate your patience and look forward to assisting you.

Your enquiry details:
Subject: {enquiry.subject}
Message: {enquiry.message}

If you have any urgent concerns, please don't hesitate to call us directly.

Best regards,
The MediWide Team

---
This is an automated response. Please do not reply to this email.
            """
            
            send_mail(
                customer_subject,
                customer_message,
                settings.DEFAULT_FROM_EMAIL,
                [enquiry.email],
                fail_silently=False,
            )
            enquiry.auto_response_sent = True
        except Exception as e:
            print(f"Failed to send auto-response: {e}")
        
        enquiry.save()
        
        return Response(
            {
                'message': 'Enquiry submitted successfully',
                'data': serializer.data
            },
            status=status.HTTP_201_CREATED
        )
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def enquiry_list(request):
    """
    Get list of all enquiries (for admin use)
    """
    enquiries = Enquiry.objects.all()
    serializer = EnquirySerializer(enquiries, many=True)
    return Response(serializer.data)
