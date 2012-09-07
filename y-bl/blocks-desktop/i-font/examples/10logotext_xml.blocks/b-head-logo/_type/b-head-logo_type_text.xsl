<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" lego "
    version="1.0">


<xsl:template match="lego:b-head-logo[@lego:type='text']" mode="lego:content">
    <div class="{lego:name(.)}__logo">
        <a class="{lego:name(.)}__link i-font_face_yandex-ru">
            <xsl:apply-templates select="." mode="lego:url"/>
            <span class="b-head-logo__letter">Я</span>ндекс
        </a>
        <xsl:apply-templates select="lego:flag"/>
    </div>
    <xsl:apply-templates select="lego:b-head-name | lego:text"/>
</xsl:template>

</xsl:stylesheet>
