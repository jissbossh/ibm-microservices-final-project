# IBM Microservices Final Project

Este repositorio contiene una aplicación integrada de microservicios desplegada en IBM Code Engine.

## Arquitectura
- **Product Details API (Python/Flask)**: Proporciona una lista de productos.
- **Dealer Pricing API (Node.js/Express)**: Proporciona los distribuidores para un producto y los precios asociados.
- **Dealer Evaluation Frontend (HTML/JS/Nginx)**: Interfaz de usuario para consultar distribuidores y precios.

## Cómo ejecutar localmente
1. Ejecutar el servicio Python: `cd product-details-python && pip install -r requirements.txt && python app.py`
2. Ejecutar el servicio Node.js: `cd dealer-pricing-nodejs && npm install && node index.js`
3. Abrir el `index.html` del frontend en el navegador.

## Despliegue en IBM Code Engine
Cada carpeta contiene un `Dockerfile`. Se puede construir la imagen y desplegar en IBM Code Engine usando la CLI o la consola web.