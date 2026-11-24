from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Datos estáticos para el microservicio de productos
products = [
    {"id": 1, "name": "Laptop Pro"},
    {"id": 2, "name": "Smartphone X"},
    {"id": 3, "name": "Wireless Headphones"}
]

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)