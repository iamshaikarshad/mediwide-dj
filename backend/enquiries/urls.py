from django.urls import path
from . import views

urlpatterns = [
    path('enquiries/', views.create_enquiry, name='create_enquiry'),
    path('enquiries/list/', views.enquiry_list, name='enquiry_list'),
]
