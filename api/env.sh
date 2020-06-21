echo '
 recapta: '${{ secrets.RECAPTA_PRIVATE_KEY }} >> app.yaml
echo ' MAIL_SENDER: '${{ secrets.MAIL_SENDER }} >> app.yaml
echo ' MAIL_REPLYTO: '${{ secrets.MAIL_REPLYTO }} >> app.yaml
echo ' SENDGRID_API: '${{ secrets.SENDGRID_API }} >> app.yaml
echo ' mongoConnect: '${{ secrets.MONGODB_CONNECT }} >> app.yaml
echo ' mongouser: '${{ secrets.MONGODB_USER }} >> app.yaml
echo ' mongopass: '${{ secrets.MONGODB_PASS }} >> app.yaml
echo ' serect: '${{ secrets.JWT_SERECT }} >> app.yaml
cat app.yaml