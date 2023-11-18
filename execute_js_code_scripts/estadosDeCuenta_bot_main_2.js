const index = excel_content.Sheet2.findIndex(item => item.CARGOS === "[SALDO INICIAL DE 0.00]");

excel_content = excel_content.Sheet2.slice(0, index + 1);
