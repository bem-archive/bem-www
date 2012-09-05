<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:x="http://www.yandex.ru/xscript"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" x lego "
    version="1.0">

<xsl:template match="lego:b-form-radio">
    <span>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:apply-templates select="." mode="lego:js-params"/>
        <xsl:apply-templates select="lego:colorpicker | lego:button"/>
    </span>
</xsl:template>

<xsl:template match="lego:b-form-radio" mode="lego:js-params-content">
    <xsl:apply-imports/>
    <xsl:text>,id:'</xsl:text>
        <xsl:apply-templates select="." mode="lego:id"/>
    <xsl:text>'</xsl:text>
</xsl:template>

<xsl:template match="lego:b-form-radio" mode="lego:id">
    <xsl:value-of select="generate-id()"/>
</xsl:template>

<xsl:template match="lego:b-form-radio[@id]" mode="lego:id">
    <xsl:value-of select="@id"/>
</xsl:template>

<xsl:template match="lego:b-form-radio" mode="lego:block-class-content">
    <xsl:apply-imports/>
    <xsl:text> i-bem</xsl:text>
</xsl:template>

</xsl:stylesheet>
