document.querySelectorAll('section').forEach(section=> section.classList.add('hidden'));

const lists = document.querySelectorAll('li');
lists.forEach(list => list.addEventListener('click', function(e){
    console.log(e.target.className);
    if(e.target.className === "home"){
        Array.from(document.querySelectorAll('section')).find(item=> item.classList.contains('xome')).classList.add('active');
        Array.from(document.querySelectorAll('section')).filter(item=> item.classList !== "xome").forEach(item=> item.classList.remove('hidden'));
    }
    if(e.target.className === "page1"){
        Array.from(document.querySelectorAll('section')).find(item=> item.classList.contains('xage1')).classList.add('active');
        Array.from(document.querySelectorAll('section')).find(item=> item.classList.contains('xage1')).classList.remove('hidden');
    }
    if(e.target.className === "page2"){
        Array.from(document.querySelectorAll('section')).find(item=> item.classList.contains('xage2')).classList.add('active');
        Array.from(document.querySelectorAll('section')).find(item=> item.classList.contains('xage2')).classList.remove('hidden');
    }
    if(e.target.className === "page3"){
        Array.from(document.querySelectorAll('section')).find(item=> item.classList.contains('xage3')).classList.add('active');
        Array.from(document.querySelectorAll('section')).find(item=> item.classList.contains('xage3')).classList.remove('hidden');
    }
}))


