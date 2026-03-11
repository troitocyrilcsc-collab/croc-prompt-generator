
body{
font-family:'Inter',sans-serif;
margin:0;
background:#0f172a;
color:white;
}

.topbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 40px;
background:#020617;
border-bottom:1px solid #1e293b;
}

.logo-area{
display:flex;
align-items:center;
gap:15px;
}

.logo{
height:60px;
}

.brand h2{
margin:0;
font-size:20px;
}

.brand span{
font-size:12px;
color:#94a3b8;
}

nav a{
margin-left:20px;
text-decoration:none;
color:#94a3b8;
}

nav a:hover{
color:white;
}

.hero{
text-align:center;
padding:80px 20px;
}

.hero h1{
font-size:48px;
margin-bottom:10px;
}

.hero p{
color:#94a3b8;
margin-bottom:30px;
}

.cta{
padding:15px 30px;
background:linear-gradient(90deg,#7c3aed,#06b6d4);
border-radius:10px;
text-decoration:none;
color:white;
}

.container{
max-width:1100px;
margin:auto;
padding:40px 20px;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.card{
background:#1e293b;
padding:25px;
border-radius:12px;
}

.card.full{
margin-top:20px;
}

select,textarea{
width:100%;
padding:12px;
margin-top:10px;
border:none;
border-radius:8px;
background:#020617;
color:white;
}

textarea{
min-height:90px;
}

.generate{
margin-top:25px;
width:100%;
padding:18px;
font-size:18px;
border:none;
border-radius:10px;
background:linear-gradient(90deg,#7c3aed,#06b6d4);
color:white;
cursor:pointer;
}

.result{
margin-top:40px;
background:#1e293b;
padding:30px;
border-radius:12px;
}

pre{
background:#020617;
padding:20px;
border-radius:8px;
white-space:pre-wrap;
}

.actions{
margin-top:15px;
display:flex;
gap:10px;
}

button{
padding:10px 20px;
border:none;
border-radius:8px;
cursor:pointer;
}

.saved{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-top:20px;
}

.saved-item{
background:#1e293b;
padding:20px;
border-radius:10px;
}

footer{
text-align:center;
padding:40px;
color:#64748b;
}

@media(max-width:800px){

.grid{
grid-template-columns:1fr;
}

.saved{
grid-template-columns:1fr;
}

.hero h1{
font-size:34px;
}

}



/* ===== Header logo improvements ===== */
.brand-link{display:inline-flex;align-items:center;line-height:0}
.logo{height:56px;width:auto;aspect-ratio:1/1;border-radius:10px}
@media(max-width:800px){.logo{height:48px}}

/* ===== Partners section ===== */
.partners{padding-top:10px}
.partners-logos{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;align-items:center;}
.partners-logos img{max-width:100%;height:auto;object-fit:contain;background:transparent;padding:8px;border-radius:8px}

/* ===== Footer spacing after partners ===== */
footer{margin-top:10px}
