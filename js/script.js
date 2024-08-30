// Seleciona o formulário de contato pelo ID "contact-form".
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário, que seria recarregar a página ao enviar.
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    alert('Obrigado por entrar em contato, ' + name + '! Sua mensagem foi enviada com sucesso.');

    document.getElementById('contact-form').reset();
});