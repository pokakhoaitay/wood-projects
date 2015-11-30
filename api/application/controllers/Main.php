<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 11/29/2015
 * Time: 12:25 PM
 */
defined('BASEPATH') OR exit('No direct script access allowed');
class   Main extends CI_Controller{
    public function index(){
        $this->load->view('index');
    }
}