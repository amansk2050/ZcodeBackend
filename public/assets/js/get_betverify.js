function getBetVerifySeal(id, account_id, seal_type){
	var xmlhttp;
	function loadXMLDoc(url,cfunc){
		if (window.XMLHttpRequest){
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else{ // code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=cfunc;
		xmlhttp.open("GET",url,true);
		xmlhttp.send();
	};
	var seal_arr = [];

	loadXMLDoc(
		"/includes/get_betverify.php?account_id="+account_id,
		function(){
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				if(xmlhttp.responseText!=''){
				var str_arr = xmlhttp.responseText.split('###');	
				
				document.getElementById(id).innerHTML = str_arr[0];			
				seal_arr['SealImage'] = str_arr[0];
				seal_arr['country'] = str_arr[1];
				seal_arr['owner'] = str_arr[2];
				seal_arr['deposit'] = str_arr[3];		
				
				}
				else{
					document.getElementById(id).innerHTML = 'Cannot validate account';		
				}
			
			}
		}
	);
  return seal_arr;
};