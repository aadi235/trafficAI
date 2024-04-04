# app.py
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import cv2
import numpy as np
from vehicle_detector import VehicleDetector
from PIL import Image
import io
import base64

app = Flask(__name__)
CORS(app)

@app.route('/api/upload', methods=['POST'])
def upload_image():
    try:
        uploaded_file = request.files['image']
        if uploaded_file.filename != '':
            image = cv2.imdecode(np.frombuffer(uploaded_file.read(), np.uint8), cv2.IMREAD_COLOR)
            vehicle_count, image = detect_vehicles(image)
            img = Image.fromarray(image)
            img_bytes = io.BytesIO()
            img.save(img_bytes, format='PNG')
            img_bytes.seek(0)
            img_base64 = base64.b64encode(img_bytes.getvalue()).decode('utf-8')
            response_data = {
                'processed_image': img_base64,
                'vehicle_count': vehicle_count
            }
            return jsonify(response_data)
        else:
            return jsonify({'error': 'No file uploaded'})
    except Exception as e:
        return jsonify({'error': str(e)})

def detect_vehicles(image):
    vd = VehicleDetector()
    vehicle_boxes = vd.detect_vehicles(image)
    vehicle_count = len(vehicle_boxes)

    for box in vehicle_boxes:
        x, y, w, h = box

        cv2.rectangle(image, (x, y), (x + w, y + h), (25, 0, 180), 3)

        cv2.putText(image, "Vehicles: " + str(vehicle_count), (20, 50), 0, 2, (100, 200, 0), 3)

    return vehicle_count, image

if __name__ == '__main__':
    app.run(debug=True)