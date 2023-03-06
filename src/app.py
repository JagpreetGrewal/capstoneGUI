from flask import Flask
import subprocess

app = Flask(__name__)

# run using $ python3 -m flask run

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

if __name__ == '__main__':
    app.run()
