#!/bin/bash

echo '
 recapta: '${recapta} >> app.yaml
echo ' MAIL_SENDER: '${MAIL_SENDER} >> app.yaml
echo ' MAIL_REPLYTO: '${MAIL_REPLYTO} >> app.yaml
echo ' SENDGRID_API: '${SENDGRID_API} >> app.yaml
echo ' mongoConnect: '${mongoConnect} >> app.yaml
echo ' mongouser: '${mongouser} >> app.yaml
echo ' mongopass: '${mongopass} >> app.yaml