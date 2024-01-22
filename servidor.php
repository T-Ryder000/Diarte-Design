<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer-master/src/Exception.php';
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica campos obrigatórios
    if (empty($_POST["Email"]) || empty($_POST["Whatsapp"])) {
        header('Location:http://localhost:8000/');
        exit();
        echo "<script>console.log('Por favor, preencha todos os campos obrigatórios.')</script>";
    }


    // Coleta os dados do formulário
    $email = $_POST["Email"];
    $whatsapp = $_POST["Whatsapp"];

    // Validar e sanitizar dados se necessário

    // Configurações para o e-mail
    $destinatario = "luadiarte@gmail.com";
    $assunto = "Contato do Cliente";

    // Corpo da mensagem
    $mensagem = "Dados do Cliente interessado no serviço de Designe:\n\n";
    $mensagem .= "Email: " . $email . "\n";
    $mensagem .= "WhatsApp: " . $whatsapp;

    $mail = new PHPMailer(true);

    try {
        // Configuração do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'luadiarte@gmail.com';
        $mail->Password = 'q u d u a p j m j u y p t c j z';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Configuração dos dados do remetente
        $mail->setFrom('luadiarte@gmail.com', 'Serviços Diarte');
        
        // Configuração do charset
        $mail->CharSet = 'UTF-8';

        // Configuração do destinatário
        $mail->addAddress($destinatario);

        // Configuração do assunto e corpo da mensagem
        $mail->Subject = $assunto;
        $mail->Body = $mensagem;

        //Envia o email
        $mail->send();
        echo "E-mail enviado com sucesso!";

        
        // Redireciona para a página inicial após o envio do e-mail
        header('Location:http://localhost:8000/');
        exit(); // Certifique-se de incluir a chamada exit para interromper a execução do script após o redirecionamento

    } catch (Exception $e) {
        echo "Erro ao enviar o e-mail: " . $mail->ErrorInfo;
    }

}
?>
