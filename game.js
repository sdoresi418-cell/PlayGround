const roster = [
 {id:'yuji',name:'YUJI ITADORI',short:'YUJI',kana:'虎杖 悠仁',title:'THE UNBREAKABLE VESSEL',ability:'DIVERGENT FIST',power:84,technique:68,speed:82,colors:['#ef596e','#252940','#f5bd9e','#342435'],type:'SORCERER'},
 {id:'mahito',name:'MAHITO',short:'MAHITO',kana:'真人',title:'THE CURSE OF HUMANITY',ability:'IDLE TRANSFIGURATION',power:73,technique:96,speed:85,colors:['#57bfc0','#26313e','#e7ac9a','#467674'],type:'CURSE'},
 {id:'geto',name:'SUGURU GETO',short:'GETO',kana:'夏油 傑',title:'CURSE MANIPULATION USER',ability:'MAXIMUM: UZUMAKI',power:76,technique:93,speed:72,colors:['#222434','#7546a4','#d8b099','#14131d'],type:'SORCERER'},
 {id:'gojo',name:'SATORU GOJO',short:'GOJO',kana:'五条 悟',title:'THE STRONGEST SORCERER',ability:'HOLLOW PURPLE',power:94,technique:100,speed:96,colors:['#5c97ee','#e5e9f4','#f3c6a9','#182a49'],type:'SORCERER'},
 {id:'haruta',name:'HARUTA SHIGEMO',short:'HARUTA',kana:'重面 春太',title:'THE MIRACLE COLLECTOR',ability:'MIRACLE',power:58,technique:63,speed:79,colors:['#d8b94f','#ded8bd','#e4b394','#302b28'],type:'CURSE USER'},
 {id:'nanami',name:'KENTO NANAMI',short:'NANAMI',kana:'七海 建人',title:'THE OVERTIME SORCERER',ability:'RATIO TECHNIQUE',power:91,technique:79,speed:67,colors:['#d8b750','#e5e0c8','#d7a985','#39483d'],type:'SORCERER'},
 {id:'hanami',name:'HANAMI',short:'HANAMI',kana:'花御',title:'THE NATURE CURSE',ability:'CURSED BUD',power:89,technique:91,speed:58,colors:['#4fc3a2','#779a65','#c4d2a3','#30534c'],type:'CURSE'},
 {id:'mahoraga',name:'MAHORAGA',short:'MAHORAGA',kana:'魔虚羅',title:'THE ADAPTING GENERAL',ability:'ADAPTATION',power:100,technique:90,speed:61,colors:['#ede1c5','#f6f0dc','#d7b79b','#877542'],type:'SHIKIGAMI'},
 {id:'megumi',name:'MEGUMI FUSHIGURO',short:'MEGUMI',kana:'伏黒 恵',title:'TEN SHADOWS USER',ability:'DIVINE DOG',power:72,technique:89,speed:83,colors:['#24263c','#171b2a','#eac3a6','#141523'],type:'SORCERER'},
 {id:'nobara',name:'NOBARA KUGISAKI',short:'NOBARA',kana:'釘崎 野薔薇',title:'FEARLESS STRAW DOLL',ability:'RESONANCE',power:76,technique:84,speed:81,colors:['#d68c49','#916048','#f2c5a5','#573829'],type:'SORCERER'},
 {id:'jogo',name:'JOGO',short:'JOGO',kana:'漏瑚',title:'THE VOLCANO CURSE',ability:'DISASTER FLAMES',power:92,technique:86,speed:65,colors:['#e77b42','#f2a94f','#bb8266','#3a2b3b'],type:'CURSE'},
 {id:'dagon',name:'DAGON',short:'DAGON',kana:'陀艮',title:'THE DEEP-SEA CURSE',ability:'DEATH SWARM',power:87,technique:86,speed:65,colors:['#429caa','#7094a1','#b7c8b9','#26394c'],type:'CURSE'},
 {id:'toji',name:'TOJI FUSHIGURO',short:'TOJI',kana:'伏黒 甚爾',title:'THE SORCERER KILLER',ability:'INVERTED SPEAR',power:98,technique:65,speed:95,colors:['#59a67a','#414b3f','#e9b89d','#25332c'],type:'ASSASSIN'},
 {id:'naoya',name:'NAOYA ZENIN',short:'NAOYA',kana:'禪院 直哉',title:'FRAME-RATE SORCERER',ability:'PROJECTION SORCERY',power:78,technique:86,speed:100,colors:['#51a7a5','#ded6c4','#e7b997','#285b5c'],type:'SORCERER'},
 {id:'maki',name:'MAKI ZENIN',short:'MAKI',kana:'禪院 真希',title:'THE CURSED TOOL MASTER',ability:'PLAYFUL CLOUD',power:91,technique:69,speed:87,colors:['#4d9e83','#b9cebb','#edc4aa','#254b43'],type:'SORCERER'},
 {id:'maki-awakened',name:'MAKI (AWAKENED)',short:'MAKI AWK.',kana:'覺醒 真希',title:'HEAVENLY RESTRICTION',ability:'SOUL SPLITTER',power:99,technique:72,speed:96,colors:['#d26978','#e6ded2','#ecc0a5','#37272d'],type:'SORCERER'},
 {id:'yuta',name:'YUTA OKKOTSU',short:'YUTA',kana:'乙骨 憂太',title:'SPECIAL GRADE SORCERER',ability:'RIKA: FULL MANIFEST',power:86,technique:94,speed:82,colors:['#e5e5e7','#d8dedf','#eac2aa','#303445'],type:'SORCERER'},
 {id:'yuta-ladder',name:'YUTA (JACOB’S LADDER)',short:'YUTA JL',kana:'乙骨 憂太',title:'COPY TECHNIQUE: ANGEL',ability:'JACOB’S LADDER',power:90,technique:100,speed:80,colors:['#ffdf87','#f2e7ca','#ecc5aa','#384353'],type:'SPECIAL GRADE'},
 {id:'sukuna',name:'RYOMEN SUKUNA',short:'SUKUNA',kana:'両面 宿儺',title:'THE KING OF CURSES',ability:'MALEVOLENT SHRINE',power:100,technique:98,speed:91,colors:['#bf5968','#302337','#efb99e','#4c242f'],type:'CURSE'},
 {id:'todo',name:'AOI TODO',short:'TODO',kana:'東堂 葵',title:'KYOTO’S BOOGIE WOOGIE',ability:'BOOGIE WOOGIE',power:96,technique:74,speed:79,colors:['#6d8d69','#cbbca5','#d8ad92','#40382d'],type:'SORCERER'}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const screens={menu:$('#menuScreen'),select:$('#selectScreen'),game:$('#gameScreen')};
let mode='battle', selectionPhase='player', playerChoice=0, enemyChoice=3, selectedIndex=0, game=null, paused=false, soundOn=true, lastFrame=0;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function spriteUrl(fighter){
 const c=document.createElement('canvas');c.width=32;c.height=48;const x=c.getContext('2d');x.imageSmoothingEnabled=false;
 const [a,b,skin,hair]=fighter.colors;const px=(xx,yy,w,h,col)=>{x.fillStyle=col;x.fillRect(xx,yy,w,h)};
 px(11,3,10,3,hair);px(8,6,16,11,skin);px(7,7,3,7,hair);px(22,7,3,7,hair);px(9,3,13,5,hair);px(8,14,16,3,hair);px(11,10,2,2,'#242333');px(19,10,2,2,'#242333');px(12,13,7,1,'#9b5964');
 px(5,19,22,17,a);px(3,20,5,13,skin);px(24,20,5,13,skin);px(8,19,16,4,b);px(9,36,6,9,b);px(18,36,6,9,b);px(7,44,9,3,'#151826');px(17,44,10,3,'#151826');px(13,24,6,4,fighter.id==='gojo'?'#d9f9ff':'#f1d09a');
 if(['geto','nanami','toji','gojo','yuta','sukuna'].includes(fighter.id))px(6,19,20,3,hair);
 if(fighter.id.includes('maki')||fighter.id==='nobara')px(22,6,3,12,a);
 if(['jogo','mahoraga','hanami','dagon'].includes(fighter.id)){px(7,3,18,3,a);px(4,8,4,7,a);px(23,8,4,7,a)}
 if(['megumi','nobara','nanami','maki','toji','yuta','sukuna'].includes(fighter.id)){px(26,24,3,17,fighter.id==='nobara'?'#b68b49':'#b8c5d5');px(25,21,5,4,'#e7cb82')}
 return c.toDataURL();
}
roster.forEach((f,i)=>f.sprite=spriteUrl(f));
function showScreen(name){Object.values(screens).forEach(s=>s.classList.remove('active'));screens[name].classList.add('active');window.scrollTo(0,0)}
function renderRoster(){const grid=$('#rosterGrid');grid.innerHTML='';roster.forEach((f,i)=>{const card=document.createElement('button');card.className='fighter-card';card.dataset.index=i;card.style.setProperty('--card-color',f.colors[0]);card.innerHTML=`<span class="card-type">${f.type==='SORCERER'?'SORC.':f.type}</span><span class="card-art" style="background-image:url('${f.sprite}')"></span><span class="card-name">${f.short}</span>`;card.addEventListener('click',()=>selectCharacter(i));grid.append(card)});$('#rosterCount').textContent=roster.length;selectCharacter(0)}
function selectCharacter(i){selectedIndex=i;const f=roster[i];$$('.fighter-card').forEach(c=>c.classList.toggle('selected',+c.dataset.index===i));$('#previewNum').textContent=String(i+1).padStart(2,'0');$('#characterKana').textContent=f.kana;$('#characterName').textContent=f.name;$('#characterTitle').textContent=f.title;$('#abilityName').textContent=f.ability;$('#statPower').style.width=f.power+'%';$('#statTechnique').style.width=f.technique+'%';$('#statSpeed').style.width=f.speed+'%';$('#powerNum').textContent=f.power;$('#techNum').textContent=f.technique;$('#speedNum').textContent=f.speed;$('#previewArt').style.setProperty('--fighter-color',f.colors[0]);$('.preview-fighter').style.backgroundImage=`url('${f.sprite}')`;$('#previewRole').textContent=selectionPhase==='player'?'YOUR FIGHTER':'YOUR OPPONENT';$('#confirmFighter').innerHTML=selectionPhase==='player'?'LOCK IN FIGHTER <b>→</b>':mode==='practice'?'START PRACTICE <b>→</b>':'START BATTLE <b>→</b>';$('#modeLabel').textContent=mode==='practice'?'PRACTICE MODE':'VERSUS BATTLE'}
function beginSelect(nextMode){mode=nextMode;selectionPhase='player';playerChoice=0;enemyChoice=mode==='practice'?1:3;selectedIndex=0;$('#previewRole').textContent='YOUR FIGHTER';$('#modeLabel').textContent=mode==='practice'?'PRACTICE MODE':'VERSUS BATTLE';$$('.fighter-card').forEach(c=>c.classList.remove('selected'));selectCharacter(0);showScreen('select')}
function confirmSelection(){if(selectionPhase==='player'){playerChoice=selectedIndex;selectionPhase='enemy';if(enemyChoice===playerChoice)enemyChoice=(playerChoice+1)%roster.length;selectCharacter(enemyChoice);$('#rosterGrid').scrollTop=0;return}enemyChoice=selectedIndex;startGame()}
$('#confirmFighter').addEventListener('click',confirmSelection);$$('[data-mode]').forEach(b=>b.addEventListener('click',()=>beginSelect(b.dataset.mode)));$('#backToMenu').addEventListener('click',()=>showScreen('menu'));$('#exitBattle').addEventListener('click',()=>{paused=false;showScreen('select');selectionPhase='player';selectCharacter(playerChoice)});
const canvas=$('#gameCanvas'),ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=false;
const keys=new Set();let audioCtx=null;
function chirp(freq=250,duration=.06,type='square'){if(!soundOn)return;try{audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();osc.type=type;osc.frequency.value=freq;gain.gain.setValueAtTime(.035,audioCtx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+duration);osc.connect(gain);gain.connect(audioCtx.destination);osc.start();osc.stop(audioCtx.currentTime+duration)}catch{}}
$('#soundToggle').addEventListener('click',()=>{soundOn=!soundOn;$('#soundToggle').innerHTML=`♪ <span>SOUND ${soundOn?'ON':'OFF'}</span>`;if(soundOn)chirp(440)});
$('#pauseBtn').addEventListener('click',togglePause);$('#resumeBtn').addEventListener('click',togglePause);$('#rematchBtn').addEventListener('click',()=>startGame());$('#resultRematch').addEventListener('click',()=>startGame());$('#resultSelect').addEventListener('click',()=>{paused=false;$('#resultOverlay').classList.remove('show');showScreen('select');selectionPhase='player';selectCharacter(playerChoice)});
function togglePause(){if(!game||game.ended)return;paused=!paused;$('#pauseOverlay').classList.toggle('show',paused);if(!paused)lastFrame=performance.now()}
function showCallout(text){const e=$('#battleCallout');e.textContent=text;e.classList.remove('show');void e.offsetWidth;e.classList.add('show')}
function fighterState(index,x,face){return {data:roster[index],x,y:410,vx:0,vy:0,face,hp:100,energy:0,attack:0,attackHit:false,specialCooldown:0,ult:0,stun:0,walk:0,flash:0,guard:false}}
function startGame(){paused=false;const p=roster[playerChoice],e=roster[enemyChoice];game={player:fighterState(playerChoice,290,1),enemy:fighterState(enemyChoice,670,-1),time:99,effects:[],projectiles:[],ended:false,shake:0,elapsed:0,mode};$('#playerHudName').textContent=p.short;$('#enemyHudName').textContent=e.short;$('#playerHealth').style.width='100%';$('#enemyHealth').style.width='100%';$('#playerEnergy').style.width='0%';$('#enemyEnergy').style.width='0%';$('#timerValue').textContent='99';$('#pauseOverlay').classList.remove('show');$('#resultOverlay').classList.remove('show');showScreen('game');showCallout('FIGHT!');chirp(440,.13);lastFrame=performance.now();requestAnimationFrame(loop)}
function damage(target,amount,source,kind='hit'){if(target.hp<=0)return;target.hp=Math.max(0,target.hp-amount);target.flash=.18;target.stun=kind==='ultimate'?.42:.2;target.vx=source.face*(kind==='ultimate'?270:kind==='special'?175:115);if(target.hp<=0)target.hp=0;game.shake=kind==='ultimate'?12:4;game.effects.push({type:kind==='ultimate'?'burst':'impact',x:target.x,y:target.y-52,life:.34,max:.34,color:kind==='ultimate'?'#ffcf70':source.data.colors[0]});source.energy=Math.min(100,source.energy+(kind==='ultimate'?0:kind==='special'?15:11));chirp(kind==='ultimate'?110:kind==='special'?190:320,.07,kind==='ultimate'?'sawtooth':'square');if(target.hp<=0)finishMatch(source===game.player)}
function finishMatch(playerWon){if(game.ended)return;game.ended=true;setTimeout(()=>{if(!game)return;$('#resultTitle').textContent=playerWon?'VICTORY':'DEFEAT';$('#resultTitle').style.color=playerWon?'#ffcb71':'#ff6685';$('#resultEyebrow').textContent=playerWon?'CURSED ENERGY MASTERED':'MATCH COMPLETE';$('#resultMessage').textContent=playerWon?'Your cursed energy burns brighter.':'Every loss is another lesson.';$('#resultOverlay').classList.add('show');showCallout(playerWon?'K.O.':'K.O.');chirp(playerWon?660:130,.22,'sawtooth')},550)}
function playerAction(type){if(!game||paused||game.ended)return;const p=game.player;if(p.stun>0)return;if(type==='attack'&&p.attack<=0){p.attack=.27;p.attackHit=false;chirp(300,.04)}if(type==='special'&&p.specialCooldown<=0){p.specialCooldown=.75;game.projectiles.push({x:p.x+p.face*29,y:p.y-49,vx:p.face*390,owner:p,life:1.45,color:p.data.colors[0],radius:p.data.id==='gojo'?14:9,kind:'special'});p.energy=Math.min(100,p.energy+7);game.effects.push({type:'cast',x:p.x+p.face*25,y:p.y-50,life:.22,max:.22,color:'#62e8e7'});chirp(520,.1,'triangle')}if(type==='ultimate'&&p.energy>=100){p.energy=0;p.ult=.5;game.shake=13;game.effects.push({type:'ultimate',x:p.x,y:p.y-50,life:.55,max:.55,color:'#ffcb71'});damage(game.enemy,35,p,'ultimate');showCallout('DOMAIN!')}}
const keyMap={KeyA:'left',ArrowLeft:'left',KeyD:'right',ArrowRight:'right',KeyW:'jump',ArrowUp:'jump',KeyS:'guard',ArrowDown:'guard',KeyJ:'attack',KeyK:'special',KeyL:'ultimate',Space:'attack'};
window.addEventListener('keydown',e=>{if(keyMap[e.code]){e.preventDefault();if(!keys.has(keyMap[e.code])){keys.add(keyMap[e.code]);if(['attack','special','ultimate'].includes(keyMap[e.code]))playerAction(keyMap[e.code])}}if(e.code==='Escape'&&screens.game.classList.contains('active'))togglePause()});window.addEventListener('keyup',e=>{if(keyMap[e.code])keys.delete(keyMap[e.code])});
$$('.move-pad button').forEach(b=>{const key=b.dataset.key==='ArrowLeft'?'left':b.dataset.key==='ArrowRight'?'right':'jump';const down=e=>{e.preventDefault();keys.add(key);try{b.setPointerCapture(e.pointerId)}catch{}};const up=e=>{e.preventDefault();keys.delete(key)};b.addEventListener('pointerdown',down);['pointerup','pointercancel','lostpointercapture'].forEach(ev=>b.addEventListener(ev,up))});$$('.action-pad button').forEach(b=>{const act=()=>playerAction(b.dataset.action);b.addEventListener('pointerdown',e=>{e.preventDefault();act()});b.addEventListener('click',e=>{if(e.detail===0)act()})});
function updateFighter(f,dt,player){if(f.stun>0)f.stun=Math.max(0,f.stun-dt);if(f.flash>0)f.flash-=dt;if(f.attack>0){f.attack=Math.max(0,f.attack-dt);if(!f.attackHit&&f.attack<.14){f.attackHit=true;const other=player?game.enemy:game.player;if(Math.abs(other.x-f.x)<83&&Math.abs(other.y-f.y)<32)damage(other,9,f,'hit')}}if(f.specialCooldown>0)f.specialCooldown-=dt;if(f.ult>0)f.ult-=dt;
 if(player){const dir=(keys.has('right')?1:0)-(keys.has('left')?1:0);if(f.stun<=0){f.vx=dir*(keys.has('guard')?145:225);if(dir)f.face=dir;f.guard=keys.has('guard');if(keys.has('jump')&&f.y>=409){f.vy=-485;chirp(410,.04)}}else f.guard=false
 }else if(mode==='battle'&&f.stun<=0){const diff=game.player.x-f.x,dist=Math.abs(diff);f.face=diff<0?-1:1;if(dist>91){f.vx=f.face*(f.data.speed>85?165:125)}else{f.vx=0;if(f.attack<=0&&Math.random()<dt*1.35){f.attack=.3;f.attackHit=false}if(dist<130&&f.specialCooldown<=0&&Math.random()<dt*.55){f.specialCooldown=1.35;game.projectiles.push({x:f.x+f.face*27,y:f.y-50,vx:f.face*275,owner:f,life:1.2,color:f.data.colors[0],radius:8,kind:'special'})}}}else{f.vx=0}
 f.x=clamp(f.x+f.vx*dt,46,914);f.y+=f.vy*dt;f.vy+=1180*dt;if(f.y>410){f.y=410;f.vy=0}f.walk+=Math.abs(f.vx)*dt*.035;f.energy=Math.min(100,f.energy+dt*(player?1.15:.8));}
function update(dt){if(!game||paused||game.ended)return;game.elapsed+=dt;game.time=Math.max(0,game.time-dt);if(game.time===0){finishMatch(game.player.hp>=game.enemy.hp);return}updateFighter(game.player,dt,true);updateFighter(game.enemy,dt,false);for(let i=game.projectiles.length-1;i>=0;i--){const q=game.projectiles[i];q.x+=q.vx*dt;q.life-=dt;const target=q.owner===game.player?game.enemy:game.player;if(Math.abs(q.x-target.x)<27&&Math.abs(q.y-(target.y-48))<34){damage(target,q.owner===game.player?14:11,q.owner,'special');game.projectiles.splice(i,1);continue}if(q.life<=0||q.x<0||q.x>960)game.projectiles.splice(i,1)}for(let i=game.effects.length-1;i>=0;i--){game.effects[i].life-=dt;if(game.effects[i].life<=0)game.effects.splice(i,1)}game.shake=Math.max(0,game.shake-dt*35);$('#playerHealth').style.width=game.player.hp+'%';$('#enemyHealth').style.width=game.enemy.hp+'%';$('#playerEnergy').style.width=game.player.energy+'%';$('#enemyEnergy').style.width=game.enemy.energy+'%';$('#timerValue').textContent=Math.ceil(game.time).toString().padStart(2,'0')}
function drawBackground(){const g=ctx.createLinearGradient(0,0,0,540);g.addColorStop(0,'#1b2239');g.addColorStop(.55,'#252843');g.addColorStop(1,'#111523');ctx.fillStyle=g;ctx.fillRect(0,0,960,540);
 // moon and distant skyline
 ctx.fillStyle='#ffcb7130';ctx.fillRect(703,77,80,80);ctx.fillStyle='#ffd992';ctx.fillRect(722,95,43,43);ctx.fillStyle='#232840';for(let i=0;i<17;i++){let x=i*63-12,h=75+(i*47%88);ctx.fillRect(x,280-h,48,h+60);ctx.fillStyle='#313653';ctx.fillRect(x+5,285-h,4,h);ctx.fillRect(x+21,295-h,5,h);ctx.fillStyle='#232840'}
 // temple beams
 ctx.fillStyle='#461f37';ctx.fillRect(58,169,844,12);ctx.fillRect(110,181,15,175);ctx.fillRect(836,181,15,175);ctx.fillStyle='#bd4c68';ctx.fillRect(42,164,876,7);ctx.fillRect(107,202,743,6);ctx.fillStyle='#703349';ctx.fillRect(111,352,739,8);
 // hanging paper lanterns
 for(const x of [165,793]){ctx.fillStyle='#333850';ctx.fillRect(x,100,2,47);ctx.fillStyle='#df596e';ctx.fillRect(x-9,143,20,29);ctx.fillStyle='#ffce7e';ctx.fillRect(x-5,149,12,16);ctx.fillStyle='#813b5a';ctx.fillRect(x-12,140,26,4)}
 // ground
 ctx.fillStyle='#151a29';ctx.fillRect(0,410,960,130);ctx.fillStyle='#343850';ctx.fillRect(0,410,960,4);ctx.fillStyle='#22283b';for(let x=0;x<960;x+=48){ctx.fillRect(x,433+(x%3)*7,25,2);ctx.fillRect(x+23,480+(x%4)*4,19,2)}ctx.fillStyle='#c95471';ctx.globalAlpha=.35;for(let x=0;x<960;x+=30){ctx.fillRect(x,414,10,2)}ctx.globalAlpha=1;
 // floor perspective stripes
 ctx.fillStyle='#4b354b';for(let x=-100;x<1100;x+=130){ctx.beginPath();ctx.moveTo(x,540);ctx.lineTo(480+(x-480)*.18,414);ctx.lineTo(485+(x+20-480)*.18,414);ctx.closePath();ctx.fill()}
 // cursed motes in the night
 for(let i=0;i<30;i++){const x=(i*173+game.elapsed*12)%960,y=110+(i*71%270);ctx.fillStyle=i%3?'#aab5e744':'#ffb68366';ctx.fillRect(x,y,2,2)}
}
function drawFighter(f,isPlayer){const [coat,trim,skin,hair]=f.data.colors,attack=f.attack>0,walk=Math.sin(f.walk)*2.5,jump=f.y<409;ctx.save();ctx.translate(f.x,f.y);if(f.face<0)ctx.scale(-1,1);
 // shadow
 ctx.fillStyle='#07091499';ctx.beginPath();ctx.ellipse(0,3,jump?24:29,jump?6:8,0,0,Math.PI*2);ctx.fill();
 if(f.energy>70){ctx.globalAlpha=.16+Math.sin(game.elapsed*12)*.08;ctx.fillStyle=f.data.colors[0];ctx.fillRect(-28,-94,56,89);ctx.globalAlpha=1}
 const r=(x,y,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(Math.round(x),Math.round(y),w,h)};
 if(f.stun>0){ctx.globalAlpha=.4+Math.sin(game.elapsed*45)*.3}if(f.flash>0)ctx.globalAlpha=.7;
 // legs with a two-frame pixel step
 let leg=jump?0:walk;r(-15+leg,-31,11,25,trim);r(3-leg,-31,11,25,trim);r(-17+leg,-9,16,8,'#151826');r(1-leg,-9,17,8,'#151826');
 // long coat / uniform
 r(-19,-66,38,38,coat);r(-23,-63,9,26,coat);r(14,-63,9,25,coat);r(-15,-68,30,7,trim);r(-5,-66,10,31,trim);r(-17,-34,14,5,trim);r(4,-34,14,5,trim);
 // arms and fists
 let swing=attack?19:Math.sin(game.elapsed*4+(isPlayer?0:2))*2;r(-25,-60,8,24,coat);r(-26,-39,8,8,skin);r(17+swing*.3,-59,9,24,coat);r(18+swing,-40,9,8,skin);
 if(attack){r(21,-47,19,10,skin);r(39,-49,12,6,trim)}
 // neck, face, hair
 r(-7,-75,14,10,skin);r(-12,-92,24,21,skin);r(-14,-91,28,8,hair);r(-15,-86,5,14,hair);r(10,-87,5,13,hair);r(-9,-77,4,3,'#22263a');r(5,-77,4,3,'#22263a');r(-3,-70,7,2,'#9b5964');
 // character-specific hair/marks
 if(f.data.id==='gojo'){r(-14,-95,28,9,'#e8edf5');r(-14,-89,5,12,'#e8edf5');r(9,-91,6,14,'#e8edf5');r(-10,-78,21,5,'#182844')}
 if(f.data.id==='sukuna'){r(-14,-93,28,9,'#b84d5a');r(-12,-80,6,2,'#9b334c');r(6,-80,6,2,'#9b334c');r(-3,-72,8,2,'#9b334c')}
 if(f.data.id==='jogo'||f.data.id==='mahoraga'||f.data.id==='hanami'||f.data.id==='dagon'){r(-16,-98,32,12,trim);r(-20,-92,5,18,coat);r(15,-92,5,18,coat);r(-13,-72,26,8,trim)}
 if(f.data.id==='mahito'){r(-15,-93,30,7,'#77c5bf');for(let i=0;i<4;i++)r(-15+i*8,-86,4,18,i%2?'#25313d':'#77c5bf')}
 if(f.data.id.includes('maki')||f.data.id==='nobara'){r(11,-90,7,25,coat);r(13,-67,6,10,trim)}
 if(f.data.id==='nanami'){r(-14,-95,28,10,'#d7c89e');r(-15,-88,5,17,'#d7c89e');r(-12,-80,24,3,'#d7c89e')}
 if(f.data.id==='megumi'){for(let i=0;i<4;i++)r(-13+i*8,-99+(i%2)*3,7,10,'#131629')}
 // weapon silhouette
 if(['nobara','nanami','toji','maki','maki-awakened'].includes(f.data.id)){r(22,-62,4,42,'#d6c38b');r(20,-66,8,6,'#b88453')}
 // details and belt
 r(-8,-44,16,3,'#ded4b0');r(-2,-43,5,6,'#f3d37d');r(-10,-58,4,3,'#f2dcaa');
 ctx.globalAlpha=1;ctx.restore();
}
function draw(){if(!game)return;ctx.save();if(game.shake){ctx.translate((Math.random()-.5)*game.shake,(Math.random()-.5)*game.shake)}drawBackground();
 // floor glow under fighters
 for(const f of [game.player,game.enemy]){ctx.globalAlpha=.14;ctx.fillStyle=f.data.colors[0];ctx.fillRect(f.x-43,407,86,3);ctx.globalAlpha=1}
 // projectiles
 game.projectiles.forEach(q=>{ctx.fillStyle=q.color;ctx.globalAlpha=.25;ctx.fillRect(q.x-17,q.y-17,34,34);ctx.globalAlpha=1;ctx.fillStyle='#fff0c8';ctx.fillRect(q.x-q.radius/2,q.y-q.radius/2,q.radius,q.radius);ctx.fillStyle=q.color;ctx.fillRect(q.x-q.radius,q.y-q.radius,q.radius*2,q.radius*2);ctx.fillStyle='#fff';ctx.fillRect(q.x-2,q.y-2,4,4)});
 drawFighter(game.enemy,false);drawFighter(game.player,true);
 game.effects.forEach(e=>{const t=e.life/e.max;ctx.globalAlpha=t;ctx.strokeStyle=e.color;ctx.lineWidth=e.type==='ultimate'?5:3;if(e.type==='impact'||e.type==='burst'){ctx.beginPath();ctx.arc(e.x,e.y,(1-t)*(e.type==='burst'?80:32)+5,0,Math.PI*2);ctx.stroke();for(let i=0;i<6;i++){const a=i*Math.PI/3;ctx.fillStyle=e.color;ctx.fillRect(e.x+Math.cos(a)*(1-t)*40,e.y+Math.sin(a)*(1-t)*40,4,4)}}else{ctx.fillStyle=e.color;ctx.fillRect(e.x-34*(1-t),e.y-34*(1-t),68*(1-t),68*(1-t))}ctx.globalAlpha=1});ctx.restore()}
function loop(now){if(!game)return;const dt=Math.min(.033,(now-lastFrame)/1000||0);lastFrame=now;update(dt);draw();if(!paused&&!game.ended)requestAnimationFrame(loop);else if(paused)requestAnimationFrame(loop)}
renderRoster();
document.querySelector('[data-fighter="yuji"]').style.backgroundImage=`url('${roster.find(f=>f.id==='yuji').sprite}')`;
document.querySelector('[data-fighter="gojo"]').style.backgroundImage=`url('${roster.find(f=>f.id==='gojo').sprite}')`;
