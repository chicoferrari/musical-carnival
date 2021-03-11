FROM php:8.0.3-fpm-alpine3.13

# Install extensions
RUN docker-php-ext-install pdo_mysql bcmath

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer