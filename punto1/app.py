from flask import Flask, request , jsonify
from flask_cors import CORS
import requests
import pandas as pd 
import json
import random
import string

app = Flask(__name__)
CORS(app)

@app.route('/contruir_json', methods=['GET'])
def index():
    # Tus listas de datos
    nombres = ["laura", "camila", "camilo", "juan", "carlos"]
    correos = ["@gmail.com", "@hotmail.com", "@outlook.com"]

    # Función para generar una contraseña aleatoria
    def generar_contrasena():
        longitud = random.randint(6, 12)
        caracteres = string.ascii_letters + string.digits
        return ''.join(random.choice(caracteres) for _ in range(longitud))

    # Lista para almacenar los diccionarios
    data = []

    # Generar 500.000 instancias
    for _ in range(500000):
        nombre = random.choice(nombres)
        correo = nombre + random.choice(correos)
        contrasena = generar_contrasena()

        data.append({
            "name": nombre,
            "email": correo,
            "password": contrasena
        })

    response = jsonify(data)
    # Retornar los datos en formato JSON
    return response
    
    
