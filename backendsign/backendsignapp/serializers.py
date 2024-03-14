from rest_framework import serializers
from .models import log,signData

class loginserializer(serializers.ModelSerializer):
    class Meta:
        model=log
        fields='__all__'
    def Create (self,validated_data):
        return log.objects.Create(**validated_data)   

class signDataserializer(serializers.ModelSerializer):
    class Meta:
        model=signData
        fields='__all__'
    def Create (self,validated_data):
        return signData.objects.Create(**validated_data)   