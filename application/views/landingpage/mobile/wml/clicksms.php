<?
$smslink = "sms:{Shortcode}?body={Keyword}";

$kw1= $this->uri->segment(6);
$kw= $this->uri->segment(4);
$msg= "SMS ".$kw." to {Shortcode}";
if ($kw1 == 'mint')
{
    $text="Click here get the best Kenyan Games, Ringtones, Sound Effects, Wallpapers & Videos
    <br/>with 1000 free credits";
}
else
{
    $text="Get the best Kenyan Games, Ringtones, Sound Effects, Wallpapers & Videos
    <br />
    with 1000 free credits. Ksh 30 to join and then Ksh 30 4x/week";
}?>
<? echo '<'.'?xml version="1.0" charset="UTF-8"?'.'>'."\n"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>
    <title>{TITLE}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;' name='viewport' />
    <link rel="shortcut icon" href="{DocumentRoot}/favicon.ico" type="image/x-icon" />

    <link rel="stylesheet" type="text/css" href="{DocumentRoot}/css/{ProductPath}/mobile.css">
    <link rel="stylesheet" type="text/css" href="{DocumentRoot}/css/{ProductPath}/mobile.css">
    <link rel="icon" href="../../images/favicon.ico">
    <link rel="stylesheet" href="/css/portal/web/js/js.css" type="text/css"  />
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-41644938-1', 'fizzmobi.com');
        ga('send', 'pageview');


    </script>
</head>

{WRAPPER_START}

<div class="wrap">

    <div class="logo">
        <img src="{DocumentRoot}/css/{ProductPath}/images/clicksms/header_bg.jpg" width="100%" height="">
    </div> <!-- logo -->



    <div align="center">

        <? /* <?php if($Signup_Flow == SUBSCRIBE_FLOW_CLICK): ?> */ ?>
        <h2 style="text-align:center;">
            <? printf('<%1$s style="text-align:center";>
                <a href="%2$s" style="color: #000000; font-weight: bold;">%3$s</a></%1$s>', "h2", $smslink,$msg); ?>
        </h2>
        <a href="<?php echo $smslink ?>" style="color: #000000;" class="tn"> <? echo $text?> </a>
        <h1 style="text-align:center;">
            <a href="<? echo $smslink?>" style="color: #000000;" class="tn"> To get your 1000 free Credit<br /> or <br />Click Here </a>
    </div><!-- first part -->


    <div class="clear"></div>

    <div class="mblue">

        <div id="left" align="left">
            <a href="<?php echo $smslink ?>" style="color: #000000; font-weight: bold;">
                <img src="{DocumentRoot}/css/{ProductPath}/images/clicksms/pass.jpg" alt="" width="100%" /></a>
        </div>
        <div id="right" align="center">


            <a href="<?php echo $smslink ?>" style="color: #000000;" class="tn">AND sms  {Keyword} to {Shortcode} </a><br/>

            <a href="<?php echo $smslink ?>" style="color: #000000; font-weight: bold;" class="tn">GET YOUR 1000 FREE CREDITS</a>

            <a href="<?php echo $smslink ?>" style="color: #000000; font-weight: bold;" class="tn"><br />AND<br />  FREE CREDITS NOW!</a>
        </div>
    </div>

    <?/* <? endif?> */?>

</div>
<div class="footer">
    <strong>Terms & Conditions:</strong>
    {Terms_And_Conditions}

    <p align="center"><span>Powered by <a href="http://www.mobivate.com" target="_blank"><strong>Mobivate</strong></a> &copy; <?=date("Y")?></span></p>
</div>
{WRAPPER_END}
