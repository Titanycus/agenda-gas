const HOJA = SpreadsheetApp.openById('1GTqZkfUXAsgNd7FDWxk82CL_mz5fEhUYMCJWymrv3LI').getActiveSheet();

function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent(); 
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, correo)
{
    HOJA.appendRow([nombre,correo]);
}