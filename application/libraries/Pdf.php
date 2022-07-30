<?php

require_once APPPATH . '/third_party/tcpdf/tcpdf.php';
require_once APPPATH . '/third_party/fpdi/fpdi.php';

class Pdf extends FPDI
{
    function __construct()
    {
        parent::__construct();
    }
	

    // Cabecera de página
    public function Header() {
        // Logo
        $this->Image(BASEPATH.'../assets/img/logo.png', 10, 10, 110, 15, 'PNG', '', '', false, 150, '', false, false, 1, false, false, false);
        // Set font
        $this->SetFont('helvetica', 'B', 20);
        // Title
        $this->Cell(0, 15, '', 0, false, 'C', 0, '', 0, false, 'M', 'M');

        //============================================= logos 2 ====================================================
        
    }

    // Page footer
    public function Footer() {
        // Position at 15 mm from bottom
        $this->SetY(-15);
        // Set font
        $this->SetFont('helvetica', 'I', 8);
        // Page number
        $this->Cell(0, 10, 'Pagina '.$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');
    }
}
