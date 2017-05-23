> Certificar que SDK e componentes estão instalados corretamente e variáveis de ambiente configuradas<br><br>
  > Configurar variáveis de ambiente no mac:
  >	1. Reset Path `PATH="/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/X11/bin"`	
  >	2. Set Android Home `export ANDROID_HOME=/Applications/Android/Android-SDK`
  >	3. Set Path `export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools`

SplashScreen e Icons<br>
		`$ ionic resources`

Instalar dependências do NPM<br>
	`$ npm install`

Plugins que precisam ser inicializados<br>
	`$ cordova plugin add cordova-plugin-inappbrowser`<br>
	`$ cordova plugin add cordova-plugin-splashscreen`<br>
	`$ cordova plugin add cordova-plugin-whitelist`

Build de APK (não assinada - platforms/android/build/outputs/apk)<br>
	`$ cordova build --release android`

Gerar Signing Key (caso já tenha, pular este passo)<br>
	`$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`

Assinar a apk não assinada com o JarSigner (tool da JDK) - VOCÊ DEVE ESTAR NA PASTA COM O APK PRA SEGUIR ESSE PASSO<br>
	`$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore NomeDoApp-release-unsigned.apk alias_name`

Otimizar o APK com o zipalign (vem no BuildTools do Android)<br>
	`$ ./zipalign -v 4 NomeDoApp-release-unsigned.apk NomeDoApp.apk`

> Caso esteja atualizando o app, atualizar a versão dele no config.xml
