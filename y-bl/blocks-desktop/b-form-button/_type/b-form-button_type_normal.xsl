<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:x="http://www.yandex.ru/xscript"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" x lego "
    version="1.0">

<xsl:template match="lego:b-form-button[@lego:type = 'normal']/lego:normal">
    <span>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
    </span>
</xsl:template>

<xsl:template match="lego:b-form-button[@lego:type = 'normal']/lego:inner">
    <span>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:apply-templates select="." mode="lego:content"/>
    </span>
</xsl:template>

</xsl:stylesheet>