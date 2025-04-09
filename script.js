

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})





document.querySelector('#togBtn').addEventListener('change', e => {
    document.querySelectorAll('.translate').forEach(el => {
      el.textContent = data[e.target.checked ? 'francais' : 'english'][el.dataset['tkey']];
    });
  });
  
  var data = {
    "english": {
      "title": "Welcome!",
      "para-01": "My work is primarily inspired by nature: indeed, it is so rich in colors, shapes, and adaptive capacities that it offers an infinite source of creative possibilities. I love the idea of narrating and sharing a beautiful story: that of my wonderment at this nature, its beauty, and its ingenuity.",
      "para-02": "Each creation is unique, each element shaped by hand. There is no mechanical repetition of form as in casting. Although my sculptures often visually resemble reality, I do not seek photographic perfection, but rather emotion.",
      "para-03": "The white porcelain I use is of great quality and finesse. Light passes through the thinnest parts of the sculptures. Some pieces remain white, which does not necessarily represent an absence of color because all the nuances of transparency make this material vibrate. Sometimes the absence of color gives way to imagination, as color is an interpretation. However, another part of my pieces are colored, and others are white and gold.",
      "para-04": "I studied and graduated from the École Nationale Supérieure des Beaux-Arts (ENSBA) in Paris.",
      "para-05": "I wish to thank and pay tribute to my late thesis advisor, Professor Ricardo Licata, a remarkable teacher who was attentive to his students and appreciated by all."
    },
    "francais": {
      "title": "Bienvenue!",
      "para-01": "Mon travail, principalement s’inspire de la nature :en effet, elle est tellement riche en couleurs, en formes ,en capacités d’adaptation qu’elle offre une source infinie de possibilités créatrices. J’aime l’idée de raconter et partager une belle histoire : celle de mon émerveillement face à cette nature, sa beauté, son ingéniosité.",
      "para-02": "Chaque création est unique, chaque élément façonné à la main. Il n’y a pas de répétition mécanique de forme comme le moulage. Même si mes sculptures se rapprochent souvent visuellement de la réalité, Je ne cherche pas la perfection photographique, mais l’émotion.",
      "para-03": "La porcelaine blanche que j’utilise est d’une grande  qualité et finesse. la lumière passe à travers les parties les plus fines des sculptures. Certaines réalisations restent blanches, ce qui ne représente pas forcément une absence de couleur car toutes les nuances de transparence font vibrer cette matière. Parfois L’absence de couleur laisse place à l’imagination, car la couleur est une interprétation. Cependant, une autre partie de mes pièces sont colorées, et d’autres sont blanches et or.",
      "para-04": "J’ai étudié et suis diplômée de l’l’école nationale supérieure des Beaux-Arts, (ENSBA) à Paris.",
      "para-05": "Je tiens à remercier et rendre hommage à feu mon professeur tuteur de thèse Ricardo Licata, un enseignant remarquable, à l’écoute de ses élèves et apprécié de tous."
    }
  }



  const lightbox = document.createElement('div')
  lightbox.id = 'lightbox'
  document.body.appendChild(lightbox)

  const images = document.querySelectorAll('img')
  images.forEach(Image =>{
    Image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
  })

  lightbox.addEventListener('click', e =>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  })



const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))
