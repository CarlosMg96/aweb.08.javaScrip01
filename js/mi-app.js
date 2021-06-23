

        var fecha = new Date();
var horas = fecha.getHours();
if(horas < 12 && horas >= 1 ){
    alert("Buenos Dias, por favor ingrese los datos seleccionados");
}

if(horas < 18 && horas >= 12){
    alert("Buenas Tardes, por favor ingrese los datos seleccionados");
}

if(horas < 24 && horas >= 18){
    alert("Buenas Noches, por favor ingrese los datos seleccionados");
}

var nombre = "";
var edad = 0;
var localidad = "";
var profesion = "";


nombre = prompt("¿Cuál es tu nombre?");
edad = prompt("¿Cuál es tu edad?");
localidad = prompt("¿Cuál es tu localidad?");
profesion = prompt("¿Cuál es tu Profesión?");

var respuesta = confirm("¿Los datos son correctos? \n Nombre: " + nombre
                                                + "\n Edad: " + edad 
                                                + "\n Localidad: " + localidad 
                                                + "\n Profesión: " + profesion);
if(respuesta){

    
        document.writeln("<center>");
        document.writeln("<table border='1'>");
            //Renglon 1
            document.writeln("<tr>");
                //Columna 1
                document.writeln("<td rowspan='4' width='25%'>");
                    document.writeln("Foto");
                document.writeln("</td>");
                 //Columna 2
                document.writeln("<td>");
                    document.writeln("<b> Nombre: </b> <spam id='nombre'>" + nombre + "</spam>");
                document.writeln("</td>");

            document.writeln("</tr>");
//Renglon 2
            document.writeln("<tr>");
                //Col 1
                document.writeln("<td>");
                    document.writeln("<b> Edad: </b>" + edad);
                document.writeln("</td>");
            document.writeln("</tr>");
//Renglon 3
            document.writeln("<tr>");
                document.writeln("<td>");
                    document.writeln("<b> Localidad: </b> " + localidad);
                document.writeln("</td>");
            document.writeln("</tr>");
//Renglon 2
            document.writeln("<tr>");
                document.writeln("<td>");
                    document.writeln("<b> Profesión: </b> " + profesion);
                document.writeln("</td>");
            document.writeln("</tr>");

        document.writeln("</table>");
        document.writeln("</center>");

        var btn = document.createElement("button");
        btn.textContent ="Cambiar nombre";
btn.setAttribute("type", "button");
btn.setAttribute("onclick", "cambiarNombre()");

        

        var br = document.createElement("br");
        


    var ctrNombre = document.createElement("input");
    ctrNombre.setAttribute("Type", "text" );
    ctrNombre.setAttribute("id", "ctrl-nombre" );


    document.body.appendChild(ctrNombre);
    document.body.appendChild(br);
        document.body.appendChild(btn);

    
}else{
alert("Gracias por visitarnos, vuelve pronto");
}

function cambiarNombre(){
    var ctNombre = document.getElementById("ctrl-nombre");
    var nombre = document.getElementById("nombre");
    nombre.innerHTML = ctNombre.value;
}
