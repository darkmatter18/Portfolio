#!/bin/bash

echo '
 recapta: '${{ serects.RECAPTA_PRIVATE_KEY }} >> app.yaml
echo ' MAIL_SENDER: '${{ serects.MAIL_SENDER }} >> app.yaml
echo ' MAIL_REPLYTO: '${{ serects.MAIL_REPLYTO }} >> app.yaml
echo ' SENDGRID_API: '${{ serects.SENDGRID_API }} >> app.yaml
echo ' mongoConnect: '${{ serects.MONGODB_CONNECT }} >> app.yaml
echo ' mongouser: '${{ serects.MONGODB_USER }} >> app.yaml
echo ' mongopass: '${{ serects.MONGODB_PASS }} >> app.yaml