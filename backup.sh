#!/bin/bash

# Directorios
SOURCE_DIR="/var/www/html"
BACKUP_DIR="/backup"

# Fecha actual
DATE=$(date +"%Y-%m-%d")

# Nombre del archivo de respaldo
BACKUP_FILE="$BACKUP_DIR/backup-$DATE.tar.gz"

# Crear la copia de seguridad
tar -czf "$BACKUP_FILE" "$SOURCE_DIR"

# Mensaje de confirmación
echo "Copia de seguridad creada: $BACKUP_FILE"

