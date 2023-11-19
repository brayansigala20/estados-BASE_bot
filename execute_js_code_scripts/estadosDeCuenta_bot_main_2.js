const index = excel_content.Sheet2.findIndex(row => row.CARGOS && typeof row.CARGOS === 'string' && row.CARGOS.includes("[SALDO INICIAL DE"))
excel_content = index !== -1 ? excel_content.Sheet2.slice(0, index + 1) : excel_content.Sheet2
