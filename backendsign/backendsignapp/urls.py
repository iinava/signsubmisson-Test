from django.contrib import admin
from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
       path('registration', views.userRegisterView.as_view(), name='registration'),
       
       path('login', views.LoginView.as_view(), name='login'),
       path('view/<int:id>', views.userViewSign.as_view(), name='view'),
       path('addsign', views.addSignView.as_view(), name='addsign'),]