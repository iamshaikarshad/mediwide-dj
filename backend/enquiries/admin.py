from django.contrib import admin
from .models import Enquiry


#@admin.ModelAdmin
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'status', 'created_at', 'admin_notified', 'auto_response_sent']
    list_filter = ['status', 'created_at', 'admin_notified', 'auto_response_sent']
    search_fields = ['name', 'email', 'subject', 'message']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'phone')
        }),
        ('Enquiry Details', {
            'fields': ('subject', 'message', 'status')
        }),
        ('System Information', {
            'fields': ('admin_notified', 'auto_response_sent', 'created_at', 'updated_at')
        }),
    )


admin.site.register(Enquiry, EnquiryAdmin)
