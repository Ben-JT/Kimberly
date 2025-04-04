# Kimberly aca importamos modulo para poder generar los numeros randoms
import random

# Kimberly  esto sirve para generar 40 calificaciones aleatorias entre 1 y el 20
calificaciones = [random.randint(1, 20) for _ in range(40)]

# Aca iniciamos las variables
suma = 0
baja = float('inf')

# Recorrer las calificaciones mediante un bucle
for calif in calificaciones:
    suma += calif
    if calif < baja:
        baja = calif

# Calcular la media
media = suma / len(calificaciones)

# Mostrar resultados
print("Calificaciones:", calificaciones)
print(f"La calificación media es: {media:.2f}")
print(f"La calificación más baja es: {baja}")
