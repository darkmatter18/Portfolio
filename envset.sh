#!/bin/bash

echo '
 recapta: '${recapta} >> app.yaml
echo ' mail_host: '${mail_host} >> app.yaml
echo ' mail_port: '${mail_port} >> app.yaml
echo ' mail_user: '${mail_user} >> app.yaml
echo ' mail_pass: '${mail_pass} >> app.yaml
echo ' mail_secure: '${mail_secure} >> app.yaml
echo ' mail_replyto: '${mail_replyto} >> app.yaml
echo ' mongoConnect: '${mongoConnect} >> app.yaml
echo ' mongouser: '${mongouser} >> app.yaml
echo ' mongopass: '${mongopass} >> app.yaml