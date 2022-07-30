<?php
require_once APPPATH . '/third_party/microsoft/GraphServiceAccessHelper.php';

class Microsoft
{
    function cambiar($alias, $password, $nombre, $apellido){
        $user = GraphServiceAccessHelper::getEntry('users',$alias.'@'.Settings::$appTenantDomainNameText);
        if(!empty($user->{'odata.error'})){
          $dataUsuario=array(
              'displayName'=> utf8_encode($nombre) ." ".utf8_encode($apellido),
              'givenName' => utf8_encode($nombre),
              'surname' => utf8_encode($apellido),
              'userPrincipalName' => $alias.'@'.Settings::$appTenantDomainNameText,
              'mailNickname' => $alias,
              'passwordProfile' => array(
                'password' => $password,
                'forceChangePasswordNextLogin' => false
              ),
              'accountEnabled' => true,
              'usageLocation' => 'CO'
          );
          $user2 = GraphServiceAccessHelper::addEntryToFeed('users',$dataUsuario);
          if(!empty($user2->{'odata.error'})) {
              $message = $user2->{'odata.error'}->{'message'};
              $retorno=false;
          } else {
              $licenseEntryInput = array(
                'addLicenses'=> array(
                    array(
                      "disabledPlans" => array(),
                      "skuId" => "e82ae690-a2d5-4d76-8d30-7c6e01e6022e"
                    )
                ),
                'removeLicenses' => array()
              );

              $userLicense = GraphServiceAccessHelper::addLicense('users',$user2->{'objectId'},$licenseEntryInput);
              $retorno=true;
          }
        }else{
            $userEntryInput = array(
              'passwordProfile' => array(
                'password' => $password,
                'forceChangePasswordNextLogin' => false
              )
            );

            $user = GraphServiceAccessHelper::updateEntry('users',$user->{'objectId'},$userEntryInput);
            $retorno=true;
        }
        return $retorno;
    }
}
