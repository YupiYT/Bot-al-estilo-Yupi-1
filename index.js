// Este código hace que funcione Glitch
const http = require('http');                                    
const express = require('express');                              
const app = express();                                           
app.use(express.static('public'));                               
app.get("/", function (request, response) {                      
  response.sendFile(__dirname + '/views/index.html');            
});                                                              
app.get("/", (request, response) => {                            
  response.sendStatus(200);                                      
});                                                              
app.listen(process.env.PORT);                                    
setInterval(() => {                                              
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   
}, 280000);                                                      

// Definimos las variables necesarias para que el bot funcione
const Discord = require("discord.js");
const client = new Discord.Client();

// Definimos el prefix del bot
let prefix = "y>"

// Activamos el evento ready
client.on('ready', () => {
  console.log('El bot ha sido encendido con éxito.')
})

// Activamos el evento message
client.on('message', async (message) => {
  
  // Hacemos que otros bots no puedan usar los comandos de este bot
  if(message.author.bot) return;
  
  // Creamos el comando ping
  if(message.content.startsWith(prefix + 'ping')) {
    message.channel.send('¡pong!')
  }
  
});

// Iniciamos sesión en Discord
client.login(process.env.TOKEN)