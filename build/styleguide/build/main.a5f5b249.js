(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(i,t,r){"use strict";r.r(t),r.d(t,"default",function(){return n});var s=r(2),e=r.n(s);function n(i){var t=i.color,r=i.size,s=i.onClick,a=i.disabled,o=i.children,c={color:t,fontSize:n.sizes[r]};return e.a.createElement("button",{className:"button",style:c,onClick:s,disabled:a},o)}r(807),n.defaultProps={color:"#333",size:"normal",onClick:function(i){console.log("You have clicked me!",i.target),alert("Hello")}},n.sizes={small:"10px",normal:"14px",large:"18px"}},185:function(i,t,r){"use strict";r.r(t),r.d(t,"default",function(){return n});var s=r(2),e=r.n(s);function n(i){var t=i.color,r=i.background,s=i.children,n={color:t,background:r,padding:".5em 1em",borderRadius:"0.3em",fontFamily:"arial"};return e.a.createElement("label",{style:n},s)}n.defaultProps={color:"#333",background:"white"}},210:function(i,t,r){i.exports=r(812)},388:function(i,t,r){var s={"./Binary_Property/ASCII.js":389,"./Binary_Property/ASCII_Hex_Digit.js":390,"./Binary_Property/Alphabetic.js":391,"./Binary_Property/Any.js":392,"./Binary_Property/Assigned.js":393,"./Binary_Property/Bidi_Control.js":394,"./Binary_Property/Bidi_Mirrored.js":395,"./Binary_Property/Case_Ignorable.js":396,"./Binary_Property/Cased.js":397,"./Binary_Property/Changes_When_Casefolded.js":398,"./Binary_Property/Changes_When_Casemapped.js":399,"./Binary_Property/Changes_When_Lowercased.js":400,"./Binary_Property/Changes_When_NFKC_Casefolded.js":401,"./Binary_Property/Changes_When_Titlecased.js":402,"./Binary_Property/Changes_When_Uppercased.js":403,"./Binary_Property/Dash.js":404,"./Binary_Property/Default_Ignorable_Code_Point.js":405,"./Binary_Property/Deprecated.js":406,"./Binary_Property/Diacritic.js":407,"./Binary_Property/Emoji.js":408,"./Binary_Property/Emoji_Component.js":409,"./Binary_Property/Emoji_Modifier.js":410,"./Binary_Property/Emoji_Modifier_Base.js":411,"./Binary_Property/Emoji_Presentation.js":412,"./Binary_Property/Extended_Pictographic.js":413,"./Binary_Property/Extender.js":414,"./Binary_Property/Grapheme_Base.js":415,"./Binary_Property/Grapheme_Extend.js":416,"./Binary_Property/Hex_Digit.js":417,"./Binary_Property/IDS_Binary_Operator.js":418,"./Binary_Property/IDS_Trinary_Operator.js":419,"./Binary_Property/ID_Continue.js":420,"./Binary_Property/ID_Start.js":421,"./Binary_Property/Ideographic.js":422,"./Binary_Property/Join_Control.js":423,"./Binary_Property/Logical_Order_Exception.js":424,"./Binary_Property/Lowercase.js":425,"./Binary_Property/Math.js":426,"./Binary_Property/Noncharacter_Code_Point.js":427,"./Binary_Property/Pattern_Syntax.js":428,"./Binary_Property/Pattern_White_Space.js":429,"./Binary_Property/Quotation_Mark.js":430,"./Binary_Property/Radical.js":431,"./Binary_Property/Regional_Indicator.js":432,"./Binary_Property/Sentence_Terminal.js":433,"./Binary_Property/Soft_Dotted.js":434,"./Binary_Property/Terminal_Punctuation.js":435,"./Binary_Property/Unified_Ideograph.js":436,"./Binary_Property/Uppercase.js":437,"./Binary_Property/Variation_Selector.js":438,"./Binary_Property/White_Space.js":439,"./Binary_Property/XID_Continue.js":440,"./Binary_Property/XID_Start.js":441,"./General_Category/Cased_Letter.js":442,"./General_Category/Close_Punctuation.js":443,"./General_Category/Connector_Punctuation.js":444,"./General_Category/Control.js":445,"./General_Category/Currency_Symbol.js":446,"./General_Category/Dash_Punctuation.js":447,"./General_Category/Decimal_Number.js":448,"./General_Category/Enclosing_Mark.js":449,"./General_Category/Final_Punctuation.js":450,"./General_Category/Format.js":451,"./General_Category/Initial_Punctuation.js":452,"./General_Category/Letter.js":453,"./General_Category/Letter_Number.js":454,"./General_Category/Line_Separator.js":455,"./General_Category/Lowercase_Letter.js":456,"./General_Category/Mark.js":457,"./General_Category/Math_Symbol.js":458,"./General_Category/Modifier_Letter.js":459,"./General_Category/Modifier_Symbol.js":460,"./General_Category/Nonspacing_Mark.js":461,"./General_Category/Number.js":462,"./General_Category/Open_Punctuation.js":463,"./General_Category/Other.js":464,"./General_Category/Other_Letter.js":465,"./General_Category/Other_Number.js":466,"./General_Category/Other_Punctuation.js":467,"./General_Category/Other_Symbol.js":468,"./General_Category/Paragraph_Separator.js":469,"./General_Category/Private_Use.js":470,"./General_Category/Punctuation.js":471,"./General_Category/Separator.js":472,"./General_Category/Space_Separator.js":473,"./General_Category/Spacing_Mark.js":474,"./General_Category/Surrogate.js":475,"./General_Category/Symbol.js":476,"./General_Category/Titlecase_Letter.js":477,"./General_Category/Unassigned.js":478,"./General_Category/Uppercase_Letter.js":479,"./Script/Adlam.js":480,"./Script/Ahom.js":481,"./Script/Anatolian_Hieroglyphs.js":482,"./Script/Arabic.js":483,"./Script/Armenian.js":484,"./Script/Avestan.js":485,"./Script/Balinese.js":486,"./Script/Bamum.js":487,"./Script/Bassa_Vah.js":488,"./Script/Batak.js":489,"./Script/Bengali.js":490,"./Script/Bhaiksuki.js":491,"./Script/Bopomofo.js":492,"./Script/Brahmi.js":493,"./Script/Braille.js":494,"./Script/Buginese.js":495,"./Script/Buhid.js":496,"./Script/Canadian_Aboriginal.js":497,"./Script/Carian.js":498,"./Script/Caucasian_Albanian.js":499,"./Script/Chakma.js":500,"./Script/Cham.js":501,"./Script/Cherokee.js":502,"./Script/Common.js":503,"./Script/Coptic.js":504,"./Script/Cuneiform.js":505,"./Script/Cypriot.js":506,"./Script/Cyrillic.js":507,"./Script/Deseret.js":508,"./Script/Devanagari.js":509,"./Script/Dogra.js":510,"./Script/Duployan.js":511,"./Script/Egyptian_Hieroglyphs.js":512,"./Script/Elbasan.js":513,"./Script/Elymaic.js":514,"./Script/Ethiopic.js":515,"./Script/Georgian.js":516,"./Script/Glagolitic.js":517,"./Script/Gothic.js":518,"./Script/Grantha.js":519,"./Script/Greek.js":520,"./Script/Gujarati.js":521,"./Script/Gunjala_Gondi.js":522,"./Script/Gurmukhi.js":523,"./Script/Han.js":524,"./Script/Hangul.js":525,"./Script/Hanifi_Rohingya.js":526,"./Script/Hanunoo.js":527,"./Script/Hatran.js":528,"./Script/Hebrew.js":529,"./Script/Hiragana.js":530,"./Script/Imperial_Aramaic.js":531,"./Script/Inherited.js":532,"./Script/Inscriptional_Pahlavi.js":533,"./Script/Inscriptional_Parthian.js":534,"./Script/Javanese.js":535,"./Script/Kaithi.js":536,"./Script/Kannada.js":537,"./Script/Katakana.js":538,"./Script/Kayah_Li.js":539,"./Script/Kharoshthi.js":540,"./Script/Khmer.js":541,"./Script/Khojki.js":542,"./Script/Khudawadi.js":543,"./Script/Lao.js":544,"./Script/Latin.js":545,"./Script/Lepcha.js":546,"./Script/Limbu.js":547,"./Script/Linear_A.js":548,"./Script/Linear_B.js":549,"./Script/Lisu.js":550,"./Script/Lycian.js":551,"./Script/Lydian.js":552,"./Script/Mahajani.js":553,"./Script/Makasar.js":554,"./Script/Malayalam.js":555,"./Script/Mandaic.js":556,"./Script/Manichaean.js":557,"./Script/Marchen.js":558,"./Script/Masaram_Gondi.js":559,"./Script/Medefaidrin.js":560,"./Script/Meetei_Mayek.js":561,"./Script/Mende_Kikakui.js":562,"./Script/Meroitic_Cursive.js":563,"./Script/Meroitic_Hieroglyphs.js":564,"./Script/Miao.js":565,"./Script/Modi.js":566,"./Script/Mongolian.js":567,"./Script/Mro.js":568,"./Script/Multani.js":569,"./Script/Myanmar.js":570,"./Script/Nabataean.js":571,"./Script/Nandinagari.js":572,"./Script/New_Tai_Lue.js":573,"./Script/Newa.js":574,"./Script/Nko.js":575,"./Script/Nushu.js":576,"./Script/Nyiakeng_Puachue_Hmong.js":577,"./Script/Ogham.js":578,"./Script/Ol_Chiki.js":579,"./Script/Old_Hungarian.js":580,"./Script/Old_Italic.js":581,"./Script/Old_North_Arabian.js":582,"./Script/Old_Permic.js":583,"./Script/Old_Persian.js":584,"./Script/Old_Sogdian.js":585,"./Script/Old_South_Arabian.js":586,"./Script/Old_Turkic.js":587,"./Script/Oriya.js":588,"./Script/Osage.js":589,"./Script/Osmanya.js":590,"./Script/Pahawh_Hmong.js":591,"./Script/Palmyrene.js":592,"./Script/Pau_Cin_Hau.js":593,"./Script/Phags_Pa.js":594,"./Script/Phoenician.js":595,"./Script/Psalter_Pahlavi.js":596,"./Script/Rejang.js":597,"./Script/Runic.js":598,"./Script/Samaritan.js":599,"./Script/Saurashtra.js":600,"./Script/Sharada.js":601,"./Script/Shavian.js":602,"./Script/Siddham.js":603,"./Script/SignWriting.js":604,"./Script/Sinhala.js":605,"./Script/Sogdian.js":606,"./Script/Sora_Sompeng.js":607,"./Script/Soyombo.js":608,"./Script/Sundanese.js":609,"./Script/Syloti_Nagri.js":610,"./Script/Syriac.js":611,"./Script/Tagalog.js":612,"./Script/Tagbanwa.js":613,"./Script/Tai_Le.js":614,"./Script/Tai_Tham.js":615,"./Script/Tai_Viet.js":616,"./Script/Takri.js":617,"./Script/Tamil.js":618,"./Script/Tangut.js":619,"./Script/Telugu.js":620,"./Script/Thaana.js":621,"./Script/Thai.js":622,"./Script/Tibetan.js":623,"./Script/Tifinagh.js":624,"./Script/Tirhuta.js":625,"./Script/Ugaritic.js":626,"./Script/Vai.js":627,"./Script/Wancho.js":628,"./Script/Warang_Citi.js":629,"./Script/Yi.js":630,"./Script/Zanabazar_Square.js":631,"./Script_Extensions/Adlam.js":632,"./Script_Extensions/Ahom.js":633,"./Script_Extensions/Anatolian_Hieroglyphs.js":634,"./Script_Extensions/Arabic.js":635,"./Script_Extensions/Armenian.js":636,"./Script_Extensions/Avestan.js":637,"./Script_Extensions/Balinese.js":638,"./Script_Extensions/Bamum.js":639,"./Script_Extensions/Bassa_Vah.js":640,"./Script_Extensions/Batak.js":641,"./Script_Extensions/Bengali.js":642,"./Script_Extensions/Bhaiksuki.js":643,"./Script_Extensions/Bopomofo.js":644,"./Script_Extensions/Brahmi.js":645,"./Script_Extensions/Braille.js":646,"./Script_Extensions/Buginese.js":647,"./Script_Extensions/Buhid.js":648,"./Script_Extensions/Canadian_Aboriginal.js":649,"./Script_Extensions/Carian.js":650,"./Script_Extensions/Caucasian_Albanian.js":651,"./Script_Extensions/Chakma.js":652,"./Script_Extensions/Cham.js":653,"./Script_Extensions/Cherokee.js":654,"./Script_Extensions/Common.js":655,"./Script_Extensions/Coptic.js":656,"./Script_Extensions/Cuneiform.js":657,"./Script_Extensions/Cypriot.js":658,"./Script_Extensions/Cyrillic.js":659,"./Script_Extensions/Deseret.js":660,"./Script_Extensions/Devanagari.js":661,"./Script_Extensions/Dogra.js":662,"./Script_Extensions/Duployan.js":663,"./Script_Extensions/Egyptian_Hieroglyphs.js":664,"./Script_Extensions/Elbasan.js":665,"./Script_Extensions/Elymaic.js":666,"./Script_Extensions/Ethiopic.js":667,"./Script_Extensions/Georgian.js":668,"./Script_Extensions/Glagolitic.js":669,"./Script_Extensions/Gothic.js":670,"./Script_Extensions/Grantha.js":671,"./Script_Extensions/Greek.js":672,"./Script_Extensions/Gujarati.js":673,"./Script_Extensions/Gunjala_Gondi.js":674,"./Script_Extensions/Gurmukhi.js":675,"./Script_Extensions/Han.js":676,"./Script_Extensions/Hangul.js":677,"./Script_Extensions/Hanifi_Rohingya.js":678,"./Script_Extensions/Hanunoo.js":679,"./Script_Extensions/Hatran.js":680,"./Script_Extensions/Hebrew.js":681,"./Script_Extensions/Hiragana.js":682,"./Script_Extensions/Imperial_Aramaic.js":683,"./Script_Extensions/Inherited.js":684,"./Script_Extensions/Inscriptional_Pahlavi.js":685,"./Script_Extensions/Inscriptional_Parthian.js":686,"./Script_Extensions/Javanese.js":687,"./Script_Extensions/Kaithi.js":688,"./Script_Extensions/Kannada.js":689,"./Script_Extensions/Katakana.js":690,"./Script_Extensions/Kayah_Li.js":691,"./Script_Extensions/Kharoshthi.js":692,"./Script_Extensions/Khmer.js":693,"./Script_Extensions/Khojki.js":694,"./Script_Extensions/Khudawadi.js":695,"./Script_Extensions/Lao.js":696,"./Script_Extensions/Latin.js":697,"./Script_Extensions/Lepcha.js":698,"./Script_Extensions/Limbu.js":699,"./Script_Extensions/Linear_A.js":700,"./Script_Extensions/Linear_B.js":701,"./Script_Extensions/Lisu.js":702,"./Script_Extensions/Lycian.js":703,"./Script_Extensions/Lydian.js":704,"./Script_Extensions/Mahajani.js":705,"./Script_Extensions/Makasar.js":706,"./Script_Extensions/Malayalam.js":707,"./Script_Extensions/Mandaic.js":708,"./Script_Extensions/Manichaean.js":709,"./Script_Extensions/Marchen.js":710,"./Script_Extensions/Masaram_Gondi.js":711,"./Script_Extensions/Medefaidrin.js":712,"./Script_Extensions/Meetei_Mayek.js":713,"./Script_Extensions/Mende_Kikakui.js":714,"./Script_Extensions/Meroitic_Cursive.js":715,"./Script_Extensions/Meroitic_Hieroglyphs.js":716,"./Script_Extensions/Miao.js":717,"./Script_Extensions/Modi.js":718,"./Script_Extensions/Mongolian.js":719,"./Script_Extensions/Mro.js":720,"./Script_Extensions/Multani.js":721,"./Script_Extensions/Myanmar.js":722,"./Script_Extensions/Nabataean.js":723,"./Script_Extensions/Nandinagari.js":724,"./Script_Extensions/New_Tai_Lue.js":725,"./Script_Extensions/Newa.js":726,"./Script_Extensions/Nko.js":727,"./Script_Extensions/Nushu.js":728,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":729,"./Script_Extensions/Ogham.js":730,"./Script_Extensions/Ol_Chiki.js":731,"./Script_Extensions/Old_Hungarian.js":732,"./Script_Extensions/Old_Italic.js":733,"./Script_Extensions/Old_North_Arabian.js":734,"./Script_Extensions/Old_Permic.js":735,"./Script_Extensions/Old_Persian.js":736,"./Script_Extensions/Old_Sogdian.js":737,"./Script_Extensions/Old_South_Arabian.js":738,"./Script_Extensions/Old_Turkic.js":739,"./Script_Extensions/Oriya.js":740,"./Script_Extensions/Osage.js":741,"./Script_Extensions/Osmanya.js":742,"./Script_Extensions/Pahawh_Hmong.js":743,"./Script_Extensions/Palmyrene.js":744,"./Script_Extensions/Pau_Cin_Hau.js":745,"./Script_Extensions/Phags_Pa.js":746,"./Script_Extensions/Phoenician.js":747,"./Script_Extensions/Psalter_Pahlavi.js":748,"./Script_Extensions/Rejang.js":749,"./Script_Extensions/Runic.js":750,"./Script_Extensions/Samaritan.js":751,"./Script_Extensions/Saurashtra.js":752,"./Script_Extensions/Sharada.js":753,"./Script_Extensions/Shavian.js":754,"./Script_Extensions/Siddham.js":755,"./Script_Extensions/SignWriting.js":756,"./Script_Extensions/Sinhala.js":757,"./Script_Extensions/Sogdian.js":758,"./Script_Extensions/Sora_Sompeng.js":759,"./Script_Extensions/Soyombo.js":760,"./Script_Extensions/Sundanese.js":761,"./Script_Extensions/Syloti_Nagri.js":762,"./Script_Extensions/Syriac.js":763,"./Script_Extensions/Tagalog.js":764,"./Script_Extensions/Tagbanwa.js":765,"./Script_Extensions/Tai_Le.js":766,"./Script_Extensions/Tai_Tham.js":767,"./Script_Extensions/Tai_Viet.js":768,"./Script_Extensions/Takri.js":769,"./Script_Extensions/Tamil.js":770,"./Script_Extensions/Tangut.js":771,"./Script_Extensions/Telugu.js":772,"./Script_Extensions/Thaana.js":773,"./Script_Extensions/Thai.js":774,"./Script_Extensions/Tibetan.js":775,"./Script_Extensions/Tifinagh.js":776,"./Script_Extensions/Tirhuta.js":777,"./Script_Extensions/Ugaritic.js":778,"./Script_Extensions/Vai.js":779,"./Script_Extensions/Wancho.js":780,"./Script_Extensions/Warang_Citi.js":781,"./Script_Extensions/Yi.js":782,"./Script_Extensions/Zanabazar_Square.js":783,"./index.js":784,"./unicode-version.js":785};function e(i){var t=n(i);return r(t)}function n(i){if(!r.o(s,i)){var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}return s[i]}e.keys=function(){return Object.keys(s)},e.resolve=n,i.exports=e,e.id=388},807:function(i,t,r){},808:function(i,t,r){i.exports={description:"available changes\n",displayName:"Button",methods:[],props:[{type:{name:"node"},required:!0,description:"Button label",tags:{},name:"children"},{type:{name:"string"},required:!1,description:"The color for the button",defaultValue:{value:"'#333'",computed:!1},tags:{},name:"color"},{type:{name:"bool"},required:!1,description:"Disable button",tags:{},name:"disabled"},{type:{name:"func"},required:!1,description:"Gets called when the user clicks on the button",defaultValue:{value:"event => {\n    // eslint-disable-next-line no-console\n    console.log('You have clicked me!', event.target);\n    alert(\"Hello\");\n}",computed:!1},tags:{},name:"onClick"},{type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'normal'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"The size of the button",defaultValue:{value:"'normal'",computed:!1},tags:{},name:"size"}],doclets:{},tags:{},examples:r(809)}},809:function(i,t,r){var s={react:r(2),"./Button.js":r(182)},e=r(183).default.bind(null,s),n=r(184).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || React$0;\nconst Button$0 = require('./Button.js');\nconst Button = Button$0.default || Button$0;",e);i.exports=[{type:"code",content:'<Button size="large" color= "red">Push Me</Button>',settings:{},evalInContext:n}]},810:function(i,t,r){i.exports={description:"there are default properties\n",displayName:"Label",methods:[],props:[{type:{name:"string"},required:!0,description:"Label text.",tags:{},name:"children"},{type:{name:"string"},required:!1,description:"you can choose color to add string in properties",defaultValue:{value:"'white'",computed:!1},tags:{},name:"background"},{type:{name:"string"},required:!1,description:"",defaultValue:{value:"'#333'",computed:!1},tags:{},name:"color"}],doclets:{},tags:{},examples:r(811)}},811:function(i,t,r){var s={react:r(2),"./Label.js":r(185)},e=r(183).default.bind(null,s),n=r(184).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || React$0;\nconst Label$0 = require('./Label.js');\nconst Label = Label$0.default || Label$0;",e);i.exports=[{type:"code",content:'<Label background="green" color="black">Label</Label>',settings:{},evalInContext:n}]}},[[210,1,2]]]);