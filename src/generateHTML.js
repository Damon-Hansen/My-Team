function generateHTML (teamMembers) {
function genManager () {
    return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Manager</h5>
                      <p class="card-text">Name: ${teamMembers[0].name}</p>
                        <p class="card-text">Email: <a href="mailto:${teamMembers[0].email}">${teamMembers[0].email}</a></p>
                      <p class="card-text">ID: ${teamMembers[0].id}</p>
                      <p class="card-text">Office Number: ${teamMembers[0].officeNumber}</p>
                    </div>
                  </div>`
}
function genEngineer () {
    const engineers = teamMembers.filter(function (teamMember) {       
        return teamMember.getRole() === 'Engineer';
    })
    const engineerHTML = engineers.map(function (engineer) {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Engineer</h5>
          <p class="card-text">Name: ${engineer.name}</p>
          <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="card-text">ID: ${engineer.id}</p>
          <p class="card-text">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
      </div>`
    })
    return engineerHTML.join('');
}
function genIntern () {
    const interns = teamMembers.filter(function (teamMember) {
        return teamMember.getRole() === 'Intern';
    })
    const internHTML = interns.map(function (intern) {
    return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <p class="card-text">Name: ${intern.name}</p>
          <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="card-text">ID: ${intern.id}</p>
          <p class="card-text">School: ${intern.school}</p>
        </div>
      </div>`
    })
    return internHTML.join('');
}
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 
    </head>
    <body>
            <header class="container-fluid bg-danger text-center p-4 display-3">My Team</header>
            <div class="row justify-content-between">
                ${genManager()}
            </div>
            <div class="row justify-content-between">
               ${genEngineer()} 
            </div>
            <div class="row justify-content-between">
                ${genIntern()}
            </div>
    </body>
    </html>
    `
}

module.exports = generateHTML;