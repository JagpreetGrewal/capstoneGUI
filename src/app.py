from flask import Flask, Response
import subprocess
import cv2
import numpy as np

# run using $ python3 -m flask run

app = Flask(__name__)
hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
camera = cv2.VideoCapture(0)

def gen():
    while True:
        temp, frame = camera.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        boxes, weights = hog.detectMultiScale(frame,winStride=(8, 8), padding=(4, 4),scale=1.05)
        for (x, y, w, h) in boxes:
            pad_w, pad_h = int(0.15 * w), int(0.01 * h)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 255), 2)

        ret, jpeg = cv2.imencode('.jpg', frame)
        frame = jpeg.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/example1')
def example1():
    # Run example1.py and return its output
    # output at http://127.0.0.1:5000/example1
    output = subprocess.check_output(['python3', 'example1.py'])
    return output

@app.route('/example2')
def example2():
    # Run example1.py and return its output
    # output at http://127.0.0.1:5000/example2
    output = subprocess.check_output(['python3', 'example2.py'])
    return output

@app.route('/example3')
def example3():
    # Run example1.py and return its output
    # output at http://127.0.0.1:5000/example1
    output = subprocess.check_output(['python3', 'example3.py'])
    return output

@app.route('/video_feed')
def video_feed():
    return Response(gen(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run()
