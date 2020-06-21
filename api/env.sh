echo '
 recapta: '${{ secrets.RECAPTA_PRIVATE_KEY }} >> ./api/app.yaml
echo ' MAIL_SENDER: '${{ secrets.MAIL_SENDER }} >> ./api/app.yaml
echo ' MAIL_REPLYTO: '${{ secrets.MAIL_REPLYTO }} >> ./api/app.yaml
echo ' SENDGRID_API: '${{ secrets.SENDGRID_API }} >> ./api/app.yaml
echo ' mongoConnect: '${{ secrets.MONGODB_CONNECT }} >> ./api/app.yaml
echo ' mongouser: '${{ secrets.MONGODB_USER }} >> ./api/app.yaml
echo ' mongopass: '${{ secrets.MONGODB_PASS }} >> ./api/app.yaml
echo ' serect: '${{ secrets.JWT_SERECT }} >> ./api/app.yaml
cat app.yaml