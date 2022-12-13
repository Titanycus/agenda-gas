function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent(); 
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('1GTqZkfUXAsgNd7FDWxk82CL_mz5fEhUYMCJWymrv3LI').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}