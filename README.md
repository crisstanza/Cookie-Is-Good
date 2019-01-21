# Cookie-Is-Good

Cookie &Eacute; Bom - Biblioteca JavaScript para manipula&ccedil;&atilde;o de cookies.

GitHub Pages: https://crisstanza.github.io/Cookie-Is-Good/

Configura&ccedil;&atilde;o local Apache:

File:

    /etc/apache2/httpd.conf

Alias:

    Alias /Cookie-Is-Good "/path-to/Cookie-Is-Good/"
    <Directory "/path-to/Cookie-Is-Good/">
        Require all granted
    </Directory>

Permissions:

    chmod -R 755 ~/Documents/GitHub/

Restart:

    sudo apachectl -k restart
