from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from rest_framework.generics import GenericAPIView
from backendsignapp.serializers import loginserializer,signDataserializer
from .models import log,signData
from django.contrib.auth.hashers import make_password,check_password
import cloudinary

# Create your views here.

class userRegisterView(GenericAPIView):
    
    serializer_class_login=loginserializer

    def post(self,request):
        # login_id:''
        email=request.data.get("email")
        password=request.data.get("password")
       
        # Encrypt the password
        encrypted_password = make_password(password)
        
        if(log.objects.filter(email=email)):
            return Response({'message':'Duplicate email found'},status.HTTP_400_BAD_REQUEST)

        else:
            serializer_login=self.serializer_class_login(data={'email':email,'password':encrypted_password})   

        if serializer_login.is_valid():
            Log=serializer_login.save()
            login_id=Log.id
            print(login_id)
    
            return Response({'data':serializer_login.data,'message':"investor registration is succesful","success":True},status=status.HTTP_201_CREATED)
        return Response ({'data':serializer_login.errors,'message':'user registration  failed',"success":False},status= status.HTTP_400_BAD_REQUEST)  
    
    
    
    

class LoginView(GenericAPIView):
    serializer_class = loginserializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = log.objects.get(email=email)
        except log.DoesNotExist:
            return Response({
                'message': 'Invalid email or password',
                'success': False
            }, status=status.HTTP_400_BAD_REQUEST)

        
        if check_password(password, user.password):
            # Password is correct
            return Response({
                'data': {
                    'login_id': user.id,
                    'email': user.email,
                    
                },
                'message': 'Login successful',
                'success': True
            })
        else:
           
            return Response({
                'message': 'Invalid email or password',
                'success': False
            }, status=status.HTTP_400_BAD_REQUEST)
            
            
            
            
            
            
            
class addSignView(GenericAPIView):
    serializer_class=signDataserializer


    def post(self,request):
        name=request.data.get("name")
        email=request.data.get("email")
        phone=request.data.get("phone")
        signature=request.data.get("signature")
        adderId=request.data.get('adderId')
        try:
            uploaded_image = cloudinary.uploader.upload(signature)
            signature_url = uploaded_image.get("url")
        except Exception as e:
            return Response(
                {"error": "Failed to upload image to Cloudinary"}, status=400
            )
        print(signature_url,"cloudinary url")
        serializer=self.serializer_class(data={'name':name, 'email':email,'phone':phone,'signature':signature_url,'adderId':adderId})
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'signature entry was added susccesfully','success':'1'},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'adding signature entry was failed','success':'0'},status=status.HTTP_400_BAD_REQUEST)    
            
            
            
            
            
            
            
            
            


class userViewSign(GenericAPIView):
    serializer_class=signDataserializer
    def get(self,request,id):
        queryset=signData.objects.filter(adderId=id).values()
        # for obj in queryset:
            
        #     obj['signature'] = settings.MEDIA_URL + str(obj['signature'])
        return Response({'data':queryset,'message':'all sign data  set' ,'success':1},status=status.HTTP_200_OK)                    