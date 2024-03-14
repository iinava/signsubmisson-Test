from django.db import models

# Create your models here.
class log(models.Model):
     email=models.CharField(max_length=30,unique=True)
     password=models.CharField(max_length=500,unique=True)
    
     
     def __str__(self):
       return f'{self.email}'
     

    



class signData(models.Model):
   name=models.CharField(max_length=30,null=True)
   email=models.CharField(max_length=30,null=True)
   phone=models.CharField(max_length=30)
   signature=models.CharField(max_length=500,null=True)
  

   adderId=models.ForeignKey(log, on_delete=models.CASCADE)
   def __str__(self):
      return f'{self.name}  ( {self.adderId})'

