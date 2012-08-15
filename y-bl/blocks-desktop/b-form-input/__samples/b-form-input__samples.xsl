<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:x="http://www.yandex.ru/xscript"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" x lego "
    version="1.0">

<xsl:template match="lego:b-form-input/lego:samples">
    <span>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:apply-templates select="." mode="lego:content"/>
    </span>
</xsl:template>

<xsl:template match="lego:b-form-input/lego:samples/lego:sample">
    <span>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:if test="@value">
            <xsl:attribute name="onclick">
                <xsl:text>return {val:</xsl:text>
                <xsl:value-of select="x:js-quote(@value)"/>
                <xsl:text>}</xsl:text>
            </xsl:attribute>
        </xsl:if>
        <xsl:apply-templates/>
    </span>
</xsl:template>

</xsl:stylesheet>