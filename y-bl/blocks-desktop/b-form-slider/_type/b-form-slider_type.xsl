<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:lego="https://lego.yandex-team.ru"
    xmlns:x="http://www.yandex.ru/xscript"
    exclude-result-prefixes=" lego x">

<xsl:template match="lego:b-form-slider[@lego:type]" mode="body">
    <div>
        <xsl:attribute name="class">
            <xsl:copy-of select="concat(local-name(), '__body', ' ', local-name(), '__body_type_', @lego:type)"/>
        </xsl:attribute>

        <div class="b-form-slider__click"/>

        <xsl:apply-templates select="." mode="lego:content"/>
    </div>
</xsl:template>

</xsl:stylesheet>