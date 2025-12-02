import React, { useState } from 'react';
import Menu from '../components/Menu';
import { Button, Box, Typography } from '@mui/material';
import InformeColeccion from '../components/InformeColeccion';

const Reports = () => {
  const [showReport, setShowReport] = useState(false);
  const [reportData, setReportData] = useState([]);

  const handleGenerateReport = async () => {
    try {
      const response = await fetch('http://localhost:3030/getItems');
      const result = await response.json();
      if (result.data) {
        setReportData(result.data);
        setShowReport(true);
      }
    } catch (error) {
      console.error('Error fetching report data:', error);
    }
  };

  return (
    <>
      <Menu />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Informes
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGenerateReport}>
          INFORME COLECCION
        </Button>
        {showReport && (
          <Box sx={{ mt: 3 }}>
            <InformeColeccion data={reportData} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Reports;
