
function progressColor(percentage){

    if(percentage>75){
        return "bg-success"
    }else if(percentage>50 && percentage<=75){
        return "bg-info"
    }else if(percentage>25 && percentage<=50){
        return "bg-warning"
    }else if(percentage<=25){
        return "bg-danger"
    }

}

function renderSkills() {

    let skillsArr = [
        {"name":"Python","percentage":90},
        {"name":"React","percentage":70},
        {"name":"Bootstrap","percentage":80},
        {"name":"Tailwind","percentage":60},
        {"name":"Flask","percentage":30},
        {"name":"Django","percentage":40},
        {"name":"Node","percentage":90},
        {"name":"Express","percentage":90},
        {"name":"MySQL","percentage":90},
        {"name":"Mongo","percentage":82},
        {"name":"AWS","percentage":60},
        {"name":"React Native","percentage":70},
        {"name":"Android Studio","percentage":80},
        {"name":"Blender","percentage":77},
        {"name":"Catia","percentage":76},
        {"name":"TinkerCAD","percentage":45},
        {"name":"Figma","percentage":60},
        {"name":"Adobe Illustrator","percentage":50},
        {"name":"VueJS","percentage":80},
        {"name":"AntD","percentage":78},
        {"name":"Material-UI","percentage":26},
        {"name":"ZBrush","percentage":24},
        {"name":"Substance Painter","percentage":27},
        {"name":"3D Printing","percentage":68},
    ]

    const outputOne = document.getElementById('skillBoxOne');
    const outputTwo = document.getElementById('skillBoxTwo');
    let totalHtmlOne = ""
    let totalHtmlTwo = ""

    skillsArr.forEach((skill,index)=>{
        let skillHtml = `
        <div class="skill mb-4">
            <div class="d-flex justify-content-between">
                <p class="mb-2">${skill.name}</p>
                <p class="mb-2">${skill.percentage}%</p>
            </div>
            <div class="progress">
                <div class="progress-bar ${progressColor(skill.percentage)}" role="progressbar" aria-valuenow="${skill.percentage}" style="width: ${skill.percentage}%;" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        `
        if(index%2){
            totalHtmlOne += skillHtml
        }else{
            totalHtmlTwo += skillHtml
        }
            
    })

    outputOne.innerHTML = totalHtmlOne
    outputTwo.innerHTML = totalHtmlTwo

}

renderSkills()