<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:x="http://www.yandex.ru/xscript"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" x lego "
    version="1.0">

<xsl:template match="lego:b-form-switch[@lego:type = 'toggle' and @lego:custom = 'my']" mode="lego:inner-content">
    <xsl:apply-templates select="lego:option[position() = 1]" mode="lego:label"/>
    <span class="b-form-switch__button">
        <img alt="" src="//yandex.st/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif" class="b-icon b-icon_type_lastfm"/>
    </span>
    <xsl:apply-templates select="lego:option[position() = 2]" mode="lego:label"/>
</xsl:template>

</xsl:stylesheet>
