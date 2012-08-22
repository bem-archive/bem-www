<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:lego="https://lego.yandex-team.ru"
    xmlns:x="http://www.yandex.ru/xscript"
    exclude-result-prefixes=" lego x">

<xsl:template match="lego:b-form-slider[@lego:type = 'range']" mode="lego:js-params-content">
    <xsl:apply-imports/>
    <xsl:apply-templates select="@min-range" mode="lego:js-params-content"/>
</xsl:template>

<xsl:template match="lego:b-form-slider[@lego:type = 'range']/@min-range" mode="lego:js-params-content">
    <xsl:value-of select="concat(',minRange:', .)"/>
</xsl:template>

</xsl:stylesheet>