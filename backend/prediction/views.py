# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from PIL import Image
import io
import os
from django.conf import settings
from .serializers import ImageUploadSerializer
import tensorflow as tf
model_path = os.path.join(settings.BASE_DIR, 'MCI Model', 'mci-resnet.h5')

class PredictionView(APIView):
    def post(self, request):
        # Load the serialized DL model from disk
        model = tf.keras.models.load_model(model_path)

        # Process the API request
        serializer = ImageUploadSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        image = serializer.validated_data['image']

        # Pre-process the image
        img = Image.open(image)
        # Perform any necessary pre-processing on the image (e.g., resizing, normalization)

        # Convert the image to the input format expected by the DL model
        img = img.resize((224, 224))  # Example: Resize the image to 224x224 pixels
        img = img.convert('RGB')  # Example: Convert to RGB color space
        img = tf.keras.preprocessing.image.img_to_array(img)
        img = tf.expand_dims(img, axis=0)

        # Pass the pre-processed image to the DL model for prediction
        result = model.predict(img)
        # Format the result as a response

        # Return the API response
        return Response({'result': result})
