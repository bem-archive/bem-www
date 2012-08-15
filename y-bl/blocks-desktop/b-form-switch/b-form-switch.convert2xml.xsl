<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:lego="https://lego.yandex-team.ru"
    xmlns:exsl="http://exslt.org/common"
    extension-element-prefixes=" exsl "
    exclude-result-prefixes=" lego exsl "
    version="1.0">

    <xsl:template match="lego:b-form-switch">
        <lego:b-form-switch>
            <xsl:copy-of select="@*"/>
            <xsl:apply-templates/>
        </lego:b-form-switch>
    </xsl:template>

</xsl:stylesheet>
