<!doctype html>
<html lang="pl-PL">
<head>
	<script src="https://apis.google.com/js/platform.js" async defer></script>
	<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
	<script>

	</script>
	<title>Szachy - Logowanie / Rejestracja</title>
</head>
<body>
	<table>
		<tr>
			<th><a href="stronaglowna.php"><img src="logo.png"></a></th>
			<th><a href="szukanie.php"><button>Szukaj przeciwnika</button></a></th>
			<th><a href="wyszukiwanie.php"><button>Szukaj graczy</button></a></th>
			<th><a href="ranking.php"><button>Ranking</button></a></th>
			<th><a href="ustawienia.php"><button>Ustawienia</button></a></th>
			<th><p id="Username">Nazwa gracza</p></th>
			<th><a href="logowanie.php"><button>Logowanie</button></a></th>
			<th><p>Rejestracja</p></th>
		</tr>
	</table>
	<form action="/login" method="POST">
    <input type="text" name="username" placeholder="Nazwa użytkownika" required><br>
    <input type="text" name="email" placeholder="Adres e-mail" required><br>
	<input type="password" name="password" placeholder="Hasło" required><br>
	<input type="password" name="password" placeholder="Powtórz hasło" required><br>
    <button type="submit">Zarejestruj się</button>
 	 </form>
	<div class="g-signin2" data-onsuccess="onSignIn"></div>
</body>
</html>